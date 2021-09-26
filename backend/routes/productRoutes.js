import express from 'express'
import { getProducts, getProductsById } from '../controllers/productController.js'

const router = express.Router()

// @desc Fetch all products
// @route GET /api/products
// @access Public
router.route('/').get(getProducts)


// @desc Fetch single product
// @route GET /api/products/:id
// @access Public
router.route('/:id').get(getProductsById)


export default router