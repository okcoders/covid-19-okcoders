const postsCollection = require('../models/posts')

async function resetDb() {
  const collection = await postsCollection()
  await collection.drop()
}

resetDb().then(() => {
	console.log("done")
}).finally(() => {
	process.exit();
})