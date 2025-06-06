const express = require('express');
const router = express.Router();
const Controllers = require('../controllers/productController');

// GET /dashboard: Devuelve el dashboard del administrador. En el dashboard aparecerán todos los artículos que se hayan subido.
// Si clickamos en uno de ellos nos llevará a su página para poder actualizarlo o eliminarlo.
router.get('/', async (req, res) =>{
  res.redirect('/dashboard')
})
router.get('/dashboard', Controllers.showProducts)

//GET /dashboard/new: Devuelve el formulario para subir un artículo nuevo.
router.get('/dashboard/new', Controllers.formNewProduct)

// GET /dashboard/:productId/edit: Devuelve el formulario para editar un producto.
router.get('/dashboard/:_id/edit', Controllers.modifyFormID);

// GET /products/:_id ruta que devuelve el producto mediante un id
router.get('/products/:_id', Controllers.getProductById);

// GET /camisetas ruta de devuelve todas las camisetas
router.get('/camisetas', Controllers.getCamisetas);

// GET /pantalones ruta de devuelve todas las pantalones
router.get('/pantalones', Controllers.getPantalones);

// GET /accesorios ruta de devuelve todas las accesorios
router.get('/accesorios', Controllers.getAccesorios);

// GET /zapatos ruta de devuelve todas las zapatos
router.get('/zapatos', Controllers.getZapatos);

//PUT /dashboard/:_id: Actualiza un producto.
router.put('/dashboard/:_id', Controllers.updateProduct);

// DELETE /dashboard/:_productId/delete: Elimina un producto.
router.delete('/:_id/delete', Controllers.deleteById);

//!POST /dashboard: Crea un nuevo producto. <- si la subida a sido correcta, volver al dashboard (falta cloudary -- :( -- ))
router.post('/dashboard', Controllers.upNewProduct);


module.exports = router;