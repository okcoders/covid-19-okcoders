const mongoClient = require('../models/connection')

let postsCollection
async function getCollection() {
	if (postsCollection) return postsCollection
	const client = await mongoClient()
	return client.collection('posts')
}

getCollection()

module.exports = getCollection