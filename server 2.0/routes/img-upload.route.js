const express = require("express");
const router = express.Router();

const controller = require("../controller/img.controller");
const controllerp = require("../controller/imogpost.controller");

const routes = (app) => {
  router.post("/img-upload", controller.uploadFile);
  router.post("/imgpost-upload", controllerp.uploadFile);
  app.use(router);
};

module.exports = routes;
