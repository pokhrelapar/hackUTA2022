const express = require("express");
const cors = require("cors");
const app = express();

global.__basedir = __dirname;

var _cors = {
  origin: "http://localhost:3000",
};

app.use(cors(_cors));

const _appRoutes = require("./routes/img-upload.route");

app.use(
  express.urlencoded({
    extended: true,
  })
);

_appRoutes(app);

const port = 3001;
app.listen(port, () => {
  console.log("App working on: " + port);
});

app.use((req, res, next) => {
  setImmediate(() => {
    next(new Error("Server error"));
  });
});

app.use(function (err, req, res, next) {
  console.error(err.message);
  if (!err.statusCode) err.statusCode = 500;
  res.status(err.statusCode).send(err.message);
});
