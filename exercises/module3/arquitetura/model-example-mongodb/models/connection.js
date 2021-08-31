// models/connection.js

const { MongoClient } = require('mongodb');

const OPTIONS = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}

const MONGO_DB_URL = 'mongodb://127.0.0.1:27017';

let db = null;

const connection = () => {
    return db
    ? Promise.resolve(db)
    : MongoClient.connect(MONGO_DB_URL, OPTIONS)
    .then((conn) => { // aqui retornou uma promise, que é a conexão (conn)
    db = conn.db('model_example');
    return db; // retornamos db que foi atribuida para o banco de dados 'model_example'
    })
};

module.exports = connection;
