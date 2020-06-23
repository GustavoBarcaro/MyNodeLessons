const path = require('path');

const express = require('express');

const rootDir = require('../util/path');
const adminData = require('./admin');

const router = express.Router();

// get and post can be only exact paths
router.get('/', ( req, res, next) => {
    const products = adminData.products
    res.render('shop', { prods: products, pageTitle: 'Shop', path: '/', hasProducts: products.length > 0 })
});

module.exports = router;