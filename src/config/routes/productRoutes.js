const express = require('express');
const path = require('path');
const router = express.Router();
const rootPath = process.cwd();



router.get('/', (req, res) => {
  res.send('Get all products');
});

router.post('/', (req, res) => {
  res.send('Create product');
});
/*
router.get('/home', (req, res) => {
  res.sendFile(path.join(__dirname, '../../views/screen/index.html'));
});*/

router.get('/home', (req, res) => {
  res.sendFile(path.join(__basedir, '/src/views/screen/index.html'));
});

router.get('/home-layout', (req, res) => {
  res.sendFile(path.join(__basedir, '/src/views/screen/index.html'));
});

router.get('/path', (req, res) => {
  res.send(__basedir);
});



module.exports = router;

