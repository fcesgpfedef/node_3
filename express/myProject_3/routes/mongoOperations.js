var express = require('express');
const collection = require('../utils/mongoConnection').connection();
var router = express.Router();

/* GET home page. */
router.get('/getData', async function(req, res, next) {
    // code here to connect to DataBase and get the data from collection
    const data = await (await collection).find().toArray();
    res.render('showData', { data });
});

module.exports = router;
