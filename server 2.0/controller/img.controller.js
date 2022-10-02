const upload = require("../middleware/imgUpload");
const Tesseract = require("tesseract.js");

const uploadFile = async (req, res) => {
  try {
    await upload(req, res);

    if (req.file == undefined) {
      return res.status(400).send({ message: "Select image to upload" });
    }

    const dynamicpath =
      "/Users/rahiblaghari/Desktop/HackUTARepoFR/hackUTA2022/server 2.0/public/" +
      req.file.originalname;

    Tesseract.recognize(dynamicpath, "eng", {}).then(({ data: { text } }) => {
      res.status(200).send({
        message: text,
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
