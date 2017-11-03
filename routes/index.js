var express = require('express');
var router = express.Router();
var path = require('path');

/* GET home page. */
router.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, '../', 'public', 'index.html'));
});

router.get('/services', function(req,res){
    res.json([
        {"id": 1, "name": "Product 1", "description": "desc1", "sku": "sku1", "price": "price1", "qty": "1"},
        {"id": 2, "name": "Product 2", "description": "desc2", "sku": "sku2", "price": "price2", "qty": "2"},
        {"id": 3, "name": "Product 3", "description": "desc3", "sku": "sku3", "price": "price3", "qty": "3"},
        {"id": 4, "name": "Product 4", "description": "desc4", "sku": "sku4", "price": "price5", "qty": "4"},
        {"id": 5, "name": "Product 5", "description": "desc5", "sku": "sku5", "price": "price6", "qty": "5"}]);
});

module.exports = router;