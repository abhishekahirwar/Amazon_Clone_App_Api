const express = require('express');
const adminRouter = express.Router();
const admin = require('../middleware/admin');
const { Product } = require("../models/product");
const { PromiseProvider } = require("mongoose");

// Add product
adminRouter.post('/admin/add-product', admin, async (req, res) => {
    try {
        const { name, description, images, quantity, price, category } = req.body;
        let product = new Product({
            name,
            description,
            images,
            quantity,
            price,
            category,
        });

        product = await product.save();
        res.json(product);
    } catch (e) {
        res.status(500).json({ error: e.message });
    }
});

// Get all your products

adminRouter.get('/admin/get-product', admin, async (req, res) => {
    try {
        const product = await Product.find({});
        res.json(product);
    }
    catch (e) {
        res.status(500).json({ error: e.message });
    }
});

// Delete the product 

adminRouter.post('/admin/delete-product', admin, async (req, res) => {
    try {
        const { id } = res.body;
        let product = await Product.findByIdAndDelete(id);
        res.json(product);
    }
    catch (e) {
        res.status(500).json({ error: e.message });
    }
});





module.exports = adminRouter;