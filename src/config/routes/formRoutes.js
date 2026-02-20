const path = require('path');
const express = require('express');
const router = express.Router();
const app = express();
const crudController = require(
    path.join(__basedir, 'src/controllers/crudController')
);



router.get('/', (req, res) => {
  res.send('Get all form');
});

router.post('/', (req, res) => {
  res.send('Create product');
});

router.post('/store', crudController.store);

router.post('/stores', crudController.stores);

router.get('/form', (req, res) => {
  res.render('screen/form/simpleinput');
});

router.get('/multidata', (req, res) => {
  res.render('screen/form/multidata');
});




module.exports = router;

