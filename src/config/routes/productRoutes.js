const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.send('Get all products');
});

router.post('/', (req, res) => {
  res.send('Create product');
});

router.get('/:id', (req, res) => {
  res.send(`Product ID: ${req.params.id}`);
});

module.exports = router;

