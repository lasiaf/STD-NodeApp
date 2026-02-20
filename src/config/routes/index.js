
class Index {
  constructor(app) {
    this.app = app;
  }

  register() {
    this.app.use('/products', require('./productRoutes'));
    this.app.use('/users', require('./userRoutes'));
    this.app.use('/form', require('./formRoutes'));
  }
}

module.exports = Index;
