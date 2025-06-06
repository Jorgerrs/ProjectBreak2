require('dotenv').config();
const path = require('path');
const swaggerUI = require('swagger-ui-express')
const docs = require('./docs/index')
const express = require('express');
const connectDB = require('./config/db');
const productRoutes = require('./routes/productRoutes');
const methodOverride = require ('method-override');

const app = express();
const PORT = process.env.PORT || 3000;

// esto lo necesitamos para enviar datos desde un formulario html a una api
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Configura method-override
// Usar la query string para sobrescribir el método
app.use(methodOverride('_method'));

app.use('/', productRoutes);
app.use('/api-docs', swaggerUI.serve,swaggerUI.setup(docs))
app.use(express.static(path.join(__dirname, 'public')));

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`🚀 Servidor en http://localhost:${PORT}`);
  });
});
