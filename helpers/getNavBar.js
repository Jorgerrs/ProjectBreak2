export function getNavBar() {
  return `
  <body>
   <nav class="navbar">
        <div class="navbar-links">
            <ul>
                <li><a href="/dashboard" class="api-link" data-endpoint="/dashboard">Productos</a></li>
                <li><a href="/camisetas" class="api-link" data-endpoint="/camisetas">Camisetas</a></li>
                <li><a href="/pantalones" class="api-link" data-endpoint="/pantalones">Pantalones</a></li>
                <li><a href="/zapatos" class="api-link" data-endpoint="/zapatos">Zapatos</a></li>
                <li><a href="/accesorios" class="api-link" data-endpoint="/accesorios">Accesorios</a></li>
                <li><a href="/dashboard/new" class="api-link" data-endpoint="/dashboard/new">Nuevo Producto</a></li>
                <li><a href="#" class="api-link" data-endpoint="XXX">Login</a></li>
            </ul>
        </div>
    </nav>
    <div class="container">
    <h1 id="titulo">Productos</h1>
  `;
};