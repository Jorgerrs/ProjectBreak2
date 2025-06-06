const multer  = require('multer');
const { CloudinaryStorage } = require('multer-storage-cloudinary');
const cloudinary = require('../config/cloudinary');
/*
const storage = new CloudinaryStorage({
  cloudinary,
  params: {
    folder: 'tienda-ropa',
    allowed_formats: ['jpg', 'jpeg', 'png', 'webp']
  }
});*/

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/'); 
  }
});

module.exports = multer({ storage });