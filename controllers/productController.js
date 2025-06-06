const baseHtml = require('../helpers/baseHtml')
const baseHtmlFooter = require('../helpers/baseHtmlFooter')
const newForm = require('../helpers/showNewProduct')
const getNavBar = require('../helpers/getNavBar')
const Product = require('../models/Product');
const getProductCards = require('../helpers/getProductCards');
const createProductCardDetail = require('../helpers/createProductCardDetail');
const modifyProductForm = require('../helpers/modifyProductForm')
const cloudinary = require("../config/cloudinary")
const upload = require("../middlewares/uploadCloudinaryMiddleware")
const express = require('express');
const router = express.Router();
const multer = require('multer')
const fs = require('node:fs')
const mUpload = multer({ dest: './uploads/' });

//let pathImg = "";
/*
function saveImage(file) {
  const newPath = `./uploads/${file.originalname}`;
  fs.renameSync(file.path, newPath)
  return newPath;
}

async function uploadImgCloud() {
  try {
    const results = await cloudinary.uploader.upload('./uploads/' + pathImg)
    console.log(results);

  } catch (error) {
    console.error("Fallo al hacer algo:", error);
  }
}
*/
const ProductController = {

  async showProducts(req, res) {
    const products = await Product.find();

    let html = baseHtml.basehtml() + getNavBar.getNavBar() + getProductCards.getProductCards(products) + baseHtmlFooter.footer();
    res.send(html);
  },

  //TODO Cambiar lo que muestra ya
  async baseHtmlTest(req, res) {
    const html = baseHtml.basehtml() + getNavBar.getNavBar() + baseHtmlFooter.footer();
    res.send(html);
  },

  async formNewProduct(req, res) {
    const html = baseHtml.basehtml() + getNavBar.getNavBar() + newForm.formNewProduct() + baseHtmlFooter.footer();
    res.send(html);
  },

  async upNewProduct(req, res) {
    /*router.post('/multer', mUpload.single('imagen'), (req, res) => {
      console.log(req.file);
      saveImage(req.file);
      pathImg = req.file.originalname;
      uploadImgCloud();
      res.send("termina -> " + pathImg);
    })*/
    //subir producto con imagen
    try {
      /*const products = await Product.create({
        nombre: req.body.nombre,
        talla: req.body.talla,
        categoria: req.body.categoria,
        precio: req.body.precio,
        descripcion: req.body.description,
        imagen: req.body.imagen
      })*/
      const products = await Product.create(req.body)
      res.redirect('/dashboard')
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  },

  async updateByName(req, res) {
    try {
      const id = req.params._id
      const title = req.body.title
      const updateTitleTask = await Task.findByIdAndUpdate(
        id, {
        title
      }, { new: true }
      )
      res.json(updateTitleTask)
    } catch (error) {
      console.log(error)
    }
  },

  async deleteById(req, res) {
    try {
      const product = await Product.findByIdAndDelete(req.params._id);
      if (!product) return res.status(404).json({ error: 'Producto no encontrado' });
      res.redirect('/dashboard')
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  },

  async getProductById(req, res) {
    try {
      const product = await Product.findById(req.params._id);

      let html = baseHtml.basehtml() + getNavBar.getNavBar() + createProductCardDetail.createProductCardDetail(product) + baseHtmlFooter.footer();

      html += baseHtmlFooter.footer();
      res.send(html);

      res.send(html);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  },

  async modifyFormID(req, res) {
    try {
      const product = await Product.findById(req.params._id);

      let html = baseHtml.basehtml() + getNavBar.getNavBar() + modifyProductForm.modifyProductForm(product) + baseHtmlFooter.footer();
      res.send(html);

    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  },
  async updateProduct(req, res) {
    try {
      const updatedProduct = await Product.findByIdAndUpdate(req.params._id, req.body, { new: true });

      if (!updatedProduct) {
        return res.status(404).send('Producto no encontrado para actualizar.');
      }
      res.redirect(`/products/${updatedProduct._id}`);
    } catch (error) {
      console.error('Error al actualizar el producto:', error);
      res.status(500).send('Error interno del servidor al actualizar el producto.');
    }
  },
  async getPantalones(req, res) {
    const products = await Product.find({categoria:'Pantalones'});

    let html = baseHtml.basehtml() + getNavBar.getNavBar() + getProductCards.getProductCards(products) + baseHtmlFooter.footer();
    res.send(html);
  },
  async getCamisetas(req, res) {
    const products = await Product.find({categoria:'Camisetas'});

    let html = baseHtml.basehtml() + getNavBar.getNavBar() + getProductCards.getProductCards(products) + baseHtmlFooter.footer();
    res.send(html);
  },
  async getAccesorios(req, res) {
    const products = await Product.find({categoria:'Accesorios'});

    let html = baseHtml.basehtml() + getNavBar.getNavBar() + getProductCards.getProductCards(products) + baseHtmlFooter.footer();
    res.send(html);
  },
  async getZapatos(req, res) {
    const products = await Product.find({categoria:'Zapatos'});

    let html = baseHtml.basehtml() + getNavBar.getNavBar() + getProductCards.getProductCards(products) + baseHtmlFooter.footer();
    res.send(html);
  }
}

module.exports = ProductController