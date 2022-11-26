const sql = require('mssql');

const sqlConfigLocal = {
    user: 'pdp',
    password: 'pdp@123',
    database: 'nodejs_3',
    server: 'localhost',
    options: {
        trustServerCertificate: true // change to true for local dev / self-signed certs
    },
    pool: {
        max: 10,
        min: 0,
        idleTimeoutMillis: 30000
    },
};

const conn = async () => {
    try {
        // make sure that any items are correctly URL encoded in the connection string
        const pool = await sql.connect(sqlConfigLocal);
        let request = await pool.request();
        request.input('PersonID', sql.Int, 1);
        request.input('LastName', sql.VarChar, 'Ange');
        const result = await request.query('select * from PersonDetails where PersonID = @PersonID and LastName = @LastName');
        return Promise.resolve(result);
    } catch (err) {
        return Promise.reject(err);
    }
};

conn().then(result => {
    console.log(`Result is : ${JSON.stringify(result)}`);
}).catch(err => {
    console.error(` In error : ${err}`);
});