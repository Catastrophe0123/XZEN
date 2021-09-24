import express from 'express';
import asyncHandler from 'express-async-handler'
import Product from '../models/productModel.js';

const router=express.Router()
//Fetch All Products
router.get('/',asyncHandler( async (req,res) =>{
    const products=await Product.find({})
    res.json(products)
}))

//Fetch Individual Product
router.get('/:id',asyncHandler( async(req,res) =>{
    const product=await Product.findById(req.params.id)
    if (product){
        res.json(product);
    }
    else{
        res.status(404)
        throw new Error('Product Not Found')
    }
    
}))



export default router
