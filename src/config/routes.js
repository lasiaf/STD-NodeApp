class Routes {
    
  constructor() {
    console.log('Routes dijalankan...');
  }

  init() {
    const express = require('express');
    const Routes2 = require('./routes/index');
    const app = express();

    app.use(express.json());
    
    const routesx = new Routes2(app);  // ✅ pakai new
    routesx.register();

    app.listen(3000, () => {
    console.log('Server running on port 3000');
    });

  }
}

module.exports = Routes;
