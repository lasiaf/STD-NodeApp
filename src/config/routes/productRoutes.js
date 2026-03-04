const path = require('path');
const express = require('express');
const router = express.Router();
const app = express();

const productController = require( path.join(__basedir, 'src/controllers/productController') );



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


router.get('/home-ejs', (req, res) => {
  console.log('Request URL:', req.url);
  res.render('screen/home');
});

router.get('/template', (req, res) => {
  res.render('screen/homepage');
});

router.get('/path', (req, res) => {
  res.send(__basedir);
});

router.get('/getDataDB/:id', productController.index);



module.exports = router;

