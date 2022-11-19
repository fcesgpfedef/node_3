const {MongoClient} = require('mongodb'); // imported the mongoClient
const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);

const connection = async () => {
    try {
        await client.connect();// waiting untill connection in established.
        const collection = client.db('node_3').collection('employee');
        const findResultInitial = await collection.findOne({name:'Yashwanth123'});
        if (findResultInitial === null || findResultInitial === undefined) {
            await collection.insertOne({name:'Yashwanth123', city : 'GUntur', course:'Nodejs' });
        } 
        
        const findResult = await collection.findOne({name:'Yashwanth'});
        await collection.updateOne({name:'Yashwanth'}, {$set:{city:'Vijaywada'}});
        const findResultAfterUpd = await collection.findOne({name:'Yashwanth'});
        const number = await collection.countDocuments();
        return Promise.resolve({findResult, findResultAfterUpd, numberOfRecords:number});
    }catch(err){
        return Promise.reject(err);
    }
};

connection().then((res) => {
    console.log(res);
}).catch((error) => {
    console.log(`Some Error ${error}`);
});