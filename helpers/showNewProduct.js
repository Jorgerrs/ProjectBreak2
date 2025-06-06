export function formNewProduct() {
  return `
      <div id="newProductPage">
      <div class="formNewProduct">
        <form action="/dashboard" method="POST">

          <label for="nombre">Nombre</label>
          <input type="text" id="nombre" name="nombre" required>
          
          <label for="name">Descripcion</label>
          <input type="text" id="descripcion" name="descripcion" required>
          
          <label for="imagen">Seleccione una imagen</label>
<!--      <input type="file" id="imagen" name="imagen" accept="image/png, image/jpeg, image/jpg, image/webp" /> -->
          <input type="text" id="imagen" name="imagen" required>
          
          <!-- cada opción podría generarse con un bucle aprovechando los colores ya creados en el Schema -->
          <label for="categoria">Categoria</label>
          <select id="categoria" name="categoria" required>
            <option value="Camisetas">Camisetas</option>
            <option value="Pantalones">Pantalones</option>
            <option value="Zapatos">Zapatos</option>
            <option value="Accesorios">Accesorios</option>
          </select>

          <!-- cada opción podría generarse con un bucle aprovechando los colores ya creados en el Schema -->
          <label for="talla">Talla</label>
          <select id="talla" name="talla" required>
            <option value="XS">XS</option>
            <option value="S">S</option>
            <option value="M">M</option>
            <option value="L">L</option>
            <option value="XL">XL</option>
          </select>

          <label for="price">Precio (€)</label>
          <input type="number" id="precio" name="precio" min="0" step="0.01" required>

          <button type="submit">Guardar</button>
        </form>

        <p><a href="/dashboard">← Volver al dashboard</a></p>
      </div>
  `;
};