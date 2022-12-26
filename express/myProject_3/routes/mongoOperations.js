var express = require('express');
const collection = require('../utils/mongoConnection').connection();
var router = express.Router();

/* GET home page. */
router.get('/getData', async function(req, res, next) {
    const data = await (await collection).find().toArray();
    res.cookie('SampleCookie', 'value is express');
    res.render('showData', { data });
});

router.get('/getSpecificData', async function(req, res, next) {
    const queryData = req.query;
    const data = await (await collection).find({college:queryData.college, city:queryData.city}).toArray();
    res.render('showData', { data });
});

router.get('/getDataByParam/:college/:city', async function(req, res, next) {
    const paramData = req.params;
    const data = await (await collection).find({college:paramData.college,city:paramData.city}).toArray();
    res.render('showData', { data });
});

router.post('/addData', async function(req, res, next) {
    const postedData = req.body;
    try {
        const insertResult = await (await collection).insertOne(postedData);
        const data = await (await collection).find().toArray();
        res.render('showData', { data });
    }catch(err){
        res.status(500).send('Some Error in Insertion.');
    }
});

router.put('/updateData', async function(req, res, next) {
    const updateData = req.body;
    try {
        const updateResult = await (await collection).updateOne({name:updateData.name}, {$set:{city:updateData.city}});
        const data = await (await collection).find().toArray();
        res.render('showData', { data });
    }catch(err){
        res.status(500).send('Some Error in Update.');
    }
});

// Try a delete operation 
module.exports = router;
