const {MongoClient} = require('mongodb'); // imported the mongoClient
const url = 'mongodb://localhostqqqq:27017';
const client = new MongoClient(url);


const connection = async () => {
    try {
        await client.connect();// waiting untill connection in established.
        const collection = client.db('node_3').collection('employee');
        await collection.insertOne({name:'Akshya', city : 'ban', course:'Nodejs' });
        return Promise.resolve('Insertion Successful');
    }catch(err){
        return Promise.reject(err);
    }
};


connection().then((res) => {
    console.log(res);
}).catch((error) => {
    // if (error instanceof MongoServerError) {
    //     console.log(`Error worth logging: ${error}`); // special case for some reason
    //   }
    // throw error; // still want to crash
    console.log('Coonection Failure');
});


// above example using promises.
// test update, find and delete.