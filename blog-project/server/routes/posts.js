var express = require('express');
var router = express.Router();
const postsCollection = require('../models/posts');
const { ObjectId } = require('mongodb');

router.get('/', async function(req, res, next) {
  const collection = await postsCollection()
  const result = await collection.find({}).toArray()
  res.json(result);
});

router.post('/', async function(req, res, next) {
  const collection = await postsCollection()
  const result = await collection.insert(req.body)
  res.json(result);
});

router.delete('/:id', async function(req, res, next) {
  const collection = await postsCollection()
  const result = await collection.deleteOne({_id: ObjectId(req.params.id)})
  res.json(result);
});

module.exports = router;
