
class Index {
  constructor(app) {
    this.app = app;
  }

  register() {
    this.app.use('/products', require('./productRoutes'));
    this.app.use('/users', require('./userRoutes'));
  }
}

module.exports = Index;
