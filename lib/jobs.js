const fxp = require('fast-xml-parser');

/*
exports.jobImage = async function (name) {
  var url = this.prefix + 'kettle/jobImage?name=' + name;
  let bin = await this.request(url);
  return bin;
};
*/

exports.jobStatus = async function (opts) {
  var url = this.prefix + 'kettle/jobStatus?xml=Y&' + new URLSearchParams(opts).toString();
  let xml = await this.request(url);
  let json = fxp.parse(xml);
  return json;
};

exports.runJob = async function (job, level = 'Debug') {
  var url = this.prefix + 'kettle/runJob?job=' + encodeURIComponent(job) + '&level=' + level;
  let xml = await this.request(url);
  let json = fxp.parse(xml);
  return json;
};

exports.executeJob = async function (opts) {
  var url = this.prefix + 'kettle/executeJob?' + new URLSearchParams(opts).toString();
  let xml = await this.request(url);
  let json = fxp.parse(xml);
  return json;
};

exports.startJob = async function (opts) {
  var url = this.prefix + 'kettle/startJob?xml=Y&' + new URLSearchParams(opts).toString();
  let xml = await this.request(url);
  let json = fxp.parse(xml);
  return json;
};

exports.stopJob = async function (opts) {
  var url = this.prefix + 'kettle/stopJob?xml=Y&' + new URLSearchParams(opts).toString();
  let xml = await this.request(url);
  let json = fxp.parse(xml);
  return json;
};

exports.removeJob = async function (opts) {
  var url = this.prefix + 'kettle/removeJob?xml=Y&' + new URLSearchParams(opts).toString();
  let xml = await this.request(url);
  let json = fxp.parse(xml);
  return json;
};

/*
exports.registerJob = async function (opts) {
  var url = this.prefix + 'kettle/registerJob?xml=Y&' + new URLSearchParams(opts).toString();
  return await this.request(url);
};
*/