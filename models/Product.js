const mongoose = require('mongoose');
const validCategoria = ["Camisetas", "Pantalones", "Zapatos", "Accesorios"];
const validTallaRopa = ["XS", "S", "M", "L", "XL", "37", "38", "39", "40", "41", "42", "43", "44", "45", "46", "47"];

const productSchema = new mongoose.Schema({
  nombre:  { type: String, required: true },
  descripcion:  { type: String, required: true },
  imagen:  { type: String },
  categoria: { type: String, enum: validCategoria, required: true },
  talla: { type: String, enum: validTallaRopa, required: true },
  precio: { type: Number, required: true, min: 0 }
});

module.exports = mongoose.model('Product', productSchema);