

/*
1. Session, Cache, dan Cookie
2. Autoload
3. Route

*/

const Autoload = require('./config/autoload');
const Routes = require('./config/routes');
const Configs = require('./config/config');



// Jalankan Autoload
const config = new Autoload();
config.init();

// Jalankan Config
const configs = new Configs();
configs.init();

// Jalankan Routes
const route = new Routes();
route.init();
