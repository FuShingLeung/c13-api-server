const express = require('express');

module.exports = function (app) {
  app.use(express.static('public'));
  console.log('ji');

  app.use(express.json());
};
