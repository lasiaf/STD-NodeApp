class AppDir {

  constructor(app) {
    this.app = app;
  }

  init() {

    const express = require('express');
    const path = require('path');

    this.app.use(express.urlencoded({ extended: true }));
    // this.app.use(express.json());

    this.app.set('view engine', 'ejs');
    this.app.set('views', path.join(__basedir, 'src', 'views'));

    this.app.use('/asset', express.static(path.join(__basedir, 'src/asset')));
    this.app.use('/templates', express.static(path.join(__basedir, 'src/views/layout/templates')));

    this.app.use(express.json());

  }

}

module.exports = AppDir;