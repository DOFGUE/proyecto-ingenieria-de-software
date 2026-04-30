import React from 'react'
import './css/blog.css'

const Blog = () => {
  return (
    <div className="blog-container">
      <div className="blog-header">
        <h1>Blog de TIENDA</h1>
        <p>Ideas, consejos y novedades para tu hogar, limpieza y papelería.</p>
      </div>

      <div className="blog-posts">
        <article className="blog-post">
          <h2>Consejos para mantener tu hogar limpio y seguro</h2>
          <p>
            Descubre los productos esenciales y las mejores prácticas para mantener tu casa reluciente.
            Te recomendamos usar detergentes suaves, desinfectantes de calidad y prepararte con una lista de compras.
          </p>
          <p className="blog-meta">Publicado el 28 de abril de 2026 · Categoría: Limpieza</p>
        </article>

        <article className="blog-post">
          <h2>Organiza tu espacio de trabajo con estilo</h2>
          <p>
            Un escritorio ordenado mejora tu productividad. Encuentra artículos de papelería funcionales y accesorios para que tu oficina sea un lugar cómodo y profesional.
          </p>
          <p className="blog-meta">Publicado el 27 de abril de 2026 · Categoría: Papelería</p>
        </article>

        <article className="blog-post">
          <h2>Haz que tu hogar sea más acogedor</h2>
          <p>
            Desde pequeños detalles hasta soluciones prácticas, te mostramos cómo crear espacios cálidos y confortables con productos accesibles.
          </p>
          <p className="blog-meta">Publicado el 26 de abril de 2026 · Categoría: Hogar</p>
        </article>
      </div>
    </div>
  )
}

export default Blog
