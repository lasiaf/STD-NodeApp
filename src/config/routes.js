class Routes {
    
  constructor() {
    console.log('Routes dijalankan...');
  }

  init() {
    const express = require('express');
    const Routes2 = require('./routes/index');
    const AppDir = require('./appdir');   // import class baru
    const app = express();

    // jalankan konfigurasi app
    const appdir = new AppDir(app);
    appdir.init();

    const routesx = new Routes2(app);  // ✅ pakai new
    routesx.register();

    app.listen(3000, '0.0.0.0', () => {
    console.log('Server running on port 3000');
    });

  }
}

module.exports = Routes;
