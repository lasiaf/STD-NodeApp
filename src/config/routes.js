class Routes {
    
  constructor() {
    console.log('Routes dijalankan...');
  }

  init() {
    const express = require('express');
    const Routes2 = require('./routes/index');
    const path = require('path');
    const app = express();

    app.use(express.urlencoded({ extended: true }));
    app.use(express.json());

    app.set('view engine', 'ejs');
    app.set('views', path.join(__basedir, 'src', 'views'));
    app.use('/asset', express.static(path.join(__basedir, 'src/asset')));
    app.use('/templates', express.static(path.join(__basedir, 'src/views/layout/templates')));

    app.use(express.json());
    
    const routesx = new Routes2(app);  // ✅ pakai new
    routesx.register();

    app.listen(3000, '0.0.0.0', () => {
    console.log('Server running on port 3000');
    });

  }
}

module.exports = Routes;
