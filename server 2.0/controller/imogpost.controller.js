const upload = require("../middleware/imgUpload");
const Tesseract = require("tesseract.js");

const uploadFile = async (req, res) => {
  try {
    const dynamicpath =
      "C:/Users/16825/Documents/Hackathon/hackUTA2022/server 2.0/public/uploads/upload.png";

    Tesseract.recognize(dynamicpath, "eng", {}).then(({ data: { text } }) => {
        sendMessage(text);
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
function sendMessage(text){
    const accountSid = 'ACc39bcf890c970ced15f158598b15c843'; 
    const authToken = 'ee02a229f468e1364bc386aeacbc0746'; 
    const client = require('twilio')(accountSid, authToken); 
    
    client.messages 
          .create({         
            body: text,  
            messagingServiceSid: 'MG468104993207ab69d2805839b69770d6',
            to: '+16825578461' 
          }) 
          .then(message => console.log(message.sid)) 
          .done();
  }
module.exports = { uploadFile };
