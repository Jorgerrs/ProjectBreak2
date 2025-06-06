export function modifyProductForm(product){
return `
        <div id="editProductPage" class="container">
            <h1>Editar Producto: ${product.nombre}</h1>
            <form action="/dashboard/${product._id}" method="POST">
            <input type="hidden" name="_method" value="PUT">

                <div class="form-group image-preview-container">
                    <label for="imagen_url">Imagen Actual:</label>
                    ${product.imagen ? `<img src="${product.imagen}" alt="Imagen del producto" class="product-edit-image-preview">` : `<p>No hay imagen actual.</p>`}
                    <input type="text" id="imagen" name="imagen" value="${product.imagen || ''}" placeholder="Introduce la URL de la imagen" readonly>
                </div>

                <div class="form-group">
                    <label for="nombre">Nombre:</label>
                    <input type="text" id="nombre" name="nombre" value="${product.nombre}" required>
                </div>

                <div class="form-group">
                    <label for="descripcion">Descripción:</label>
                    <textarea id="descripcion" name="descripcion" rows="4" required>${product.descripcion}</textarea>
                </div>

                <div class="form-group">
                    <label for="categoria">Categoría:</label>
                    <select id="categoria" name="categoria" required>
                        <option value="">Selecciona una categoría</option>
                        <option value="Camisetas" ${product.categoria === 'Camisetas' ? 'selected' : ''}>Camisetas</option>
                        <option value="Pantalones" ${product.categoria === 'Pantalones' ? 'selected' : ''}>Pantalones</option>
                        <option value="Zapatos" ${product.categoria === 'Zapatos' ? 'selected' : ''}>Zapatos</option>
                        <option value="Accesorios" ${product.categoria === 'Accesorios' ? 'selected' : ''}>Accesorios</option>
                        </select>
                </div>

                <div class="form-group">
                    <label for="talla">Talla:</label>
                    <select id="talla" name="talla" required>
                        <option value="">Selecciona una talla</option>
                        <option value="XS" ${product.talla === 'XS' ? 'selected' : ''}>XS</option>
                        <option value="S" ${product.talla === 'S' ? 'selected' : ''}>S</option>
                        <option value="M" ${product.talla === 'M' ? 'selected' : ''}>M</option>
                        <option value="L" ${product.talla === 'L' ? 'selected' : ''}>L</option>
                        <option value="XL" ${product.talla === 'XL' ? 'selected' : ''}>XL</option>
                        </select>
                </div>

                <div class="form-group">
                    <label for="precio">Precio (€):</label>
                    <input type="number" id="precio" name="precio" min="0" step="0.01" value="${product.precio}" required>
                </div>

                <button type="submit">Guardar Cambios</button>
            </form>
            <p><a href="/">Volver a Productos</a></p>
        </div>
`
}