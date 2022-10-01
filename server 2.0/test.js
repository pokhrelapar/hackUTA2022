const fs = import("fs");
const path = import("path");
const fetch = import("node-fetch");
const FormData = import("form-data");

const internals = {
  url: "https://api.taggun.io/api/receipt/v1/simple/file",
  filePath: "./sample.jpeg",
  taggunApiKey: "617c77e041d511edb69573233a13efd6",
};

(async () => {
  const filePath = internals.filePath;

  try {
    const postBody = createFormData(filePath);

    const response = await fetch(internals.url, {
      headers: {
        accept: "application/json",
        apikey: internals.taggunApiKey,
        contentType: getContentType(filePath),
      },
      method: "POST",
      body: postBody,
    });

    const result = await response.json();
    console.log(result);
  } catch (err) {
    console.error(err);
  }
})();

function createFormData(filePath) {
  const filename = path.basename(filePath);
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
  const fileExt = path.extname(filePath);
  switch (fileExt.toLocaleLowerCase()) {
    case ".png":
      return "image/png";
    case ".pdf":
      return "application/pdf";
    default:
      return "image/jpg";
  }
}
