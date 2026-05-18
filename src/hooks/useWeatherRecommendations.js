import { useState, useEffect } from 'react'
import { weatherRecommendations } from '../data/weatherRecommendations'

const WEATHER_API_KEY = import.meta.env.VITE_OPENWEATHER_API_KEY
const WEATHER_API_URL = 'https://api.openweathermap.org/data/2.5/weather'

export const useWeatherRecommendations = (latitude = 2.9271, longitude = -75.2898) => {
  const [weather, setWeather] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [recommendation, setRecommendation] = useState(weatherRecommendations.default)

  useEffect(() => {
    let isMounted = true

    const fetchWeather = async () => {
      try {
        const url = `${WEATHER_API_URL}?lat=${latitude}&lon=${longitude}&appid=${WEATHER_API_KEY}&units=metric`

        const response = await fetch(url)

        const text = await response.text()
        const data = JSON.parse(text)

        if (!response.ok) {
          throw new Error(`API Error: ${response.status} - ${data.message || 'Unknown error'}`)
        }

        if (!data.weather?.[0]?.main || !data.main) {
          throw new Error('Invalid data structure')
        }

        if (!isMounted) return

        setWeather(data)

        // Determinar tipo de clima
        const main = data.weather[0].main.toLowerCase()
        const temp = data.main.temp
        const humidity = data.main.humidity

        console.log('DEBUG - main:', main, 'temp:', temp, 'humidity:', humidity)

        let weatherType = 'default'

        if (main.includes('rain') || main.includes('drizzle')) {
        weatherType = 'rainy'
        } else if (main.includes('clear') || main.includes('sunny') || main.includes('partly')) {
        weatherType = 'sunny'
        } else if (temp < 12) {
        weatherType = 'cold'
        } else if (temp > 26) {
        weatherType = 'hot'
        } else if (humidity > 70) {
        weatherType = 'humid'
        }

        setRecommendation(weatherRecommendations[weatherType])
        setError(null)
      } catch (err) {
        console.error('Weather error:', err.message)
        if (isMounted) {
          setError(err.message)
          setWeather(null)
          setRecommendation(weatherRecommendations.default)
        }
      } finally {
        if (isMounted) {
          setLoading(false)
        }
      }
    }

    fetchWeather()

    return () => {
      isMounted = false
    }
  }, [latitude, longitude])

  return { weather, recommendation, loading, error }
}