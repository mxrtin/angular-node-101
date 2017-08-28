var express = require('express');
var router = express.Router();
var path = require('path');

/* GET home page. */
router.get('/', function(req, res, next) {
    res.sendFile(path.join(__dirname, '../', 'public', 'index.html'));
});

router.get('/services', function(req,res){
    res.json([
        {"id": 1, "name": "Customer 1", "city": "City One"},
        {"id": 1, "name": "Customer 2", "city": "City Two"},
        {"id": 1, "name": "Customer 3", "city": "City Three"},
        {"id": 1, "name": "Customer 4", "city": "City Four"},
        {"id": 1, "name": "Customer 5", "city": "City Five"},
        {"id": 1, "name": "Customer 6", "city": "City Six"},
        {"id": 1, "name": "Customer 7", "city": "City Seven"},
        {"id": 1, "name": "Customer 8", "city": "City Eight"},
        {"id": 1, "name": "Customer 9", "city": "City Nine"},
        {"id": 1, "name": "Customer 10", "city": "City Ten"}]);
});

module.exports = router;