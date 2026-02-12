

/*
1. Session, Cache, dan Cookie
2. Autoload
3. Route

*/
global.__basedir = __dirname;
const Autoload = require('./config/autoload');
const Routes = require('./config/routes');
const express = require('express');

const app = express();

// Jalankan Autoload
const config = new Autoload();
config.init();

// Jalankan Routes
const route = new Routes();
route.init();
