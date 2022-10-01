const upload = require("../middleware/imgUpload");
const Tesseract = require("tesseract.js");

const uploadFile = async (req, res) => {
  try {
    await upload(req, res);

    if (req.file == undefined) {
      return res.status(400).send({ message: "Select image to upload" });
    }

    const dynamicpath =
      "/Users/tanmay/Desktop/HACKUTA/hackUTA2022/server 2.0/public/uploads/" +
      req.file.originalname;
    getText(dynamicpath);

    res.status(200).send({
      message: "Image successfully uploaded: " + req.file.originalname,
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

function getText(passedImg) {
  Tesseract.recognize(passedImg, "eng", { logger: (m) => console.log(m) }).then(
    ({ data: { text } }) => {
      console.log(text);
    }
  );
}

module.exports = { uploadFile };
