"use strict";
const fs = require("fs");
const key = fs.readFileSync("./key.pem");
const cert = fs.readFileSync("./cert.pem");
module.exports = {
    key,
    cert,
};
