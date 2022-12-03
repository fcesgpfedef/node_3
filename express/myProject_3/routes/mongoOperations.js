var express = require('express');
const collection = require('../utils/mongoConnection').connection();
var router = express.Router();

/* GET home page. */
router.get('/getData', async function(req, res, next) {
    const data = await (await collection).find().toArray();
    res.render('showData', { data });
});

router.get('/getSpecificData', async function(req, res, next) {
    const queryData = req.query;
    const data = await (await collection).find({college:queryData.college, city:queryData.city}).toArray();
    res.render('showData', { data });
});

router.get('/getDataByParam/:param/:city', async function(req, res, next) {
    const paramData = req.params;
    const data = await (await collection).find({college:paramData.param,city:paramData.city}).toArray();
    res.render('showData', { data });
});

module.exports = router;
