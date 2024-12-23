const express = require('express');
const router = express.Router();

const {createProduct, getProducts, deleteProduct} = require('../Services/productService');

router.post('/createProduct', createProduct);
router.get('/getProducts', getProducts);
router.delete('/deleteProduct', deleteProduct);

module.exports = router;