import express from 'express';
import { getProducts, getProductById } from '../controllers/productController.js';
import { protect, admin } from '../middleware/authMiddleware.js';
import { deleteProduct,updateProduct, createProduct } from '../controllers/productController.js';

const router=express.Router()



//Fetch All Products
router.route('/').get(getProducts)

//Fetch Individual Product, Delete Product (Admin), Update Product  (Admin)
router.route('/:id').get(getProductById).delete(protect, admin, deleteProduct ).put(protect, admin, updateProduct)

//Create Product (Admin)
router.route('/create').post(protect, admin, createProduct)



export default router
