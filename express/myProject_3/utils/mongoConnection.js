const {MongoClient} = require('mongodb'); // imported the mongoClient
const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);

const connection = async () => {
    try {
        await client.connect();// waiting untill connection in established.
        const collection = client.db('node_3').collection('employee');
        return Promise.resolve(collection);
    }catch(err){
        return Promise.reject(err);
    }
};

exports.connection = connection;