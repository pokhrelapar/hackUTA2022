const fs = require("fs");
const path = import("path");
const fetch = import("node-fetch");
const FormData = require("form-data");
const axios = require("axios");

const internals = {
  url: "https://api.taggun.io/api/receipt/v1/simple/file",
  filePath: "testimage.jpeg",
  taggunApiKey: "617c77e041d511edb69573233a13efd6",
};

(async () => {
  const filePath = internals.filePath;

  try {
    const postBody = createFormData(filePath);

    // const response = await fetch(internals.url, {
    //   headers: {
    //     accept: "application/json",
    //     apikey: internals.taggunApiKey,
    //     contentType: getContentType(filePath),
    //   },
    //   method: "POST",
    //   body: postBody,
    // });

    const response = axios({
      method: "post",
      url: internals.url,
      headers: {
        accept: "application/json",
        apikey: internals.taggunApiKey,
        contentType: getContentType(filePath),
      },
      body: postBody,
    });

    const result = await response.json();
    // console.log(result);
  } catch (err) {
    console.error(err);
  }
})();

function createFormData(filePath) {
  const filename = "test";
  const fileStream = fs.createReadStream(filePath, { autoClose: true });
  const formData = new FormData();

  // Add any other POST properties that you require
  // Go to https://api.taggun.io to see what other POST properties you require.
  formData.append("file", fileStream, {
    filename,
    contentType: getContentType(filePath),
  });

  formData.append("refresh", "false");

  return formData;
}

function getContentType(filePath) {
  const fileExt = ".png";
  switch (fileExt.toLocaleLowerCase()) {
    case ".png":
      return "image/png";
    case ".pdf":
      return "application/pdf";
    default:
      return "image/jpg";
  }
}
var axios = require("axios");
var FormData = require("form-data");
var fs = require("fs");
var data = new FormData();
data.append("file", fs.createReadStream("testimage.jpeg"));

var config = {
  method: "post",
  url: "https://api.taggun.io/api/receipt/v1/simple/file",
  headers: {
    "Content-Type": "multipart/form-data",
    apikey: "617c77e041d511edb69573233a13efd6",
    ...data.getHeaders(),
  },
  data: data,
};

axios(config)
  .then(function (response) {
    console.log(JSON.stringify(response.data));
  })
  .catch(function (error) {
    console.log(error);
  });
