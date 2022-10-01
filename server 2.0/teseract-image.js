const Tesseract = require("tesseract.js");
const imgPath = "sample.png";
function getText(imgPath) {
  Tesseract.recognize(imgPath, "eng", { logger: (m) => console.log(m) }).then(
    ({ data: { text } }) => {
      console.log(text);
    }
  );
}

getText(imgPath);
