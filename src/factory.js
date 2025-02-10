const aws = require("aws-sdk");
const Handler = require("./handler");

const rekoSvc = new aws.Rekognition();
const translaterSvc = new aws.Translate();

const handler = new Handler({
  rekoSvc,
  translaterSvc,
});

module.exports = handler.main.bind(handler);
