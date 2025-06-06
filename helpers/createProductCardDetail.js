export function createProductCardDetail(product) {
    return  `
      <div class="product-card">
        <h1>${product.nombre}</h1>
        <img src="${product.imagen}" alt="${product.nombre}">
        <p>${product.descripcion}</p>
        <p>Categoria ${product.categoria}</p>
        <p>Talla ${product.talla}</p>
        <p>Precio ${product.precio}€</p>
        <form action="/${product._id}/delete?_method=DELETE" method="POST">
          <button type="submit">Eliminar</button>
        </form>
          <a href="/dashboard/${product._id}/edit">Editar</a>
      </div>`
}