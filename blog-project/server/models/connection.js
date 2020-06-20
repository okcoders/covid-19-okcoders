const MongoClient = require('mongodb').MongoClient

const connectionString = 'mongodb://localhost:27017/blog?retryWrites=true&w=majority'

let client
async function getConnection() {
	if (client) return client
	const newClient = await MongoClient.connect(connectionString)
	console.log('Connected to Database')
	client = newClient.db('blog')
	return client
}


module.exports = getConnection