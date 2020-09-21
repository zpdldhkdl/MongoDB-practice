const mongodb = require('mongodb');
const config = require('../config');

let connection = null;

exports.connect = async () => {
    connection = await mongodb.MongoClient.connect(config.MONGODB_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });
    return connection.db('HUMOR');
};

exports.disconnect = async () => {
    if (!connection) {
        console.log('cannot found connection');
        return;
    }

    await connection.disconnect();
    console.log('MongoDB Disconnected');
};
