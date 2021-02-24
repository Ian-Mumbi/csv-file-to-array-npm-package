const csv = require("fast-csv");
const fs = require("fs");

module.exports = (path, hasHeaders = true) =>
  new Promise((resolve, reject) => {
    let data = [];
    fs.createReadStream(path, "utf8")
      .pipe(csv.parse({ headers: hasHeaders }))
      .on("error", (err) => reject(err))
      .on("data", (row) => data.push(row))
      .on("end", () => {
        resolve(data);
      });
  });
