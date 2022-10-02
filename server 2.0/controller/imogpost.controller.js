const upload = require("../middleware/imgUpload");
const Tesseract = require("tesseract.js");

const uploadFile = async (req, res) => {
  try {
    const dynamicpath =
      "/Users/rahiblaghari/Desktop/HackUTARepoFR/hackUTA2022/server 2.0/public/uploads/upload.png";

    Tesseract.recognize(dynamicpath, "eng", {}).then(({ data: { text } }) => {
      res.status(200).send({
        message: text,
        test: req.body.input
      });
    });
  } catch (err) {
    console.log(err);

    if (err.code == "LIMIT_FILE_SIZE") {
      return res.status(500).send({
        message: "File size should be less than 5MB",
      });
    }

    res.status(500).send({
      message: `Error: ${err}`,
    });
  }
};

const getData = async () => {
  Tesseract.recognize(passedImg, "eng", {}).then(({ data: { text } }) => {
    return text;
  });
};

async function getText(passedImg) {
  Tesseract.recognize(passedImg, "eng", {}).then(({ data: { text } }) => {
    return text;
  });
}
function sleep(time) {
  return new Promise((resolve) => setTimeout(resolve, time));
}

module.exports = { uploadFile };
