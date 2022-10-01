import express, { request } from "express";
import cors from "cors";
import multer from "multer";
const router = express.Router();
// import loginRoutes from './routes/login.js' -- example

const app = express();

app.use(express.json());
app.use(express.text());
app.use(express.urlencoded({ extended: true }));

app.use(cors());
// routes must be under the parser otherwise it gets data that is un-parsed

router.get("/home", (req, res) => {
  res.send("Hello World, This is home router");
});

router.get("/profile", (req, res) => {
  res.send("Hello World, This is profile router");
});

router.get("/login", (req, res) => {
  res.send("Hello World, This is login router");
});

const storage = multer.diskStorage({
  destination: function (req, file, callback) {
    callback(null, "/src/my-images");
  },
  filename: function (req, file, callback) {
    callback(null, file.fieldname);
  },
});
app.use("/", router);

app.listen(process.env.port || 3000);

console.log("Web Server is listening at port " + (process.env.port || 3000));
