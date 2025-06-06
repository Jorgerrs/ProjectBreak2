export function getProductCards(product) {

  let html  = '<div class="product-grid">'

  for (let i = 0; i < product.length; i++) {

    html+=  `
      <div class="product-card">
        <img src="${product[i].imagen}" alt="${product[i].nombre}">
        <h2>${product[i].nombre}</h2>
        <p>${product[i].descripcion}</p>
        <p>${product[i].precio}€</p>
        <a href="/products/${product[i]._id}">Ver detalle</a>
      </div>`
    
  }
  
  html += '</div>'

    return html
}