class Autoload {
  constructor() {
    global.__basedir = process.cwd();
    console.log('Autoload dijalankan...');
    require('dotenv').config();
  }

  init() {
    
    
    const jwtSecret = process.env.JWT_SECRET;
    const dbHost = process.env.DB_HOST;

    console.log(`ENV diload JWT : ${jwtSecret }`);
    console.log(`ENV diload DB_HOST : ${dbHost }`);

    
  }
}

module.exports = Autoload;
