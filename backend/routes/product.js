const express = require('express')
const router = express.Router()

const {getProducts, newProduct, getSingleProduct, UpdateProduct, DeleteProduct} = require('../controllers/productController')

router.route('/products').get(getProducts)
router.route('/product/:id').get(getSingleProduct)
router.route('/product/new').post(newProduct)
router.route('/admin/product/:id')
    .put(UpdateProduct)
    .delete(DeleteProduct)

module.exports = router      