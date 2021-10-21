import express from 'express'
import { getProducts, getProductsById, deleteProduct, createProduct, updateProduct, createProductReview,
    getTopProducts } from '../controllers/productController.js'
import { protect, admin } from '../middleware/authMiddleware.js'



const router = express.Router()

// @desc Fetch all products
// @route GET /api/products
// @access Public
router.route('/').get(getProducts).post(protect, admin, createProduct)

router.route('/:id/reviews').post(protect, createProductReview)
router.get('/top', getTopProducts)


// @desc Fetch single product
// @route GET /api/products/:id
// @access Public
router.route('/:id').get(getProductsById).delete(protect, admin, deleteProduct).put(protect, admin, updateProduct)


export default router