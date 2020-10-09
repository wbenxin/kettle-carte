const fxp = require('fast-xml-parser');

/*
exports.transImage = async function (name) {
  var url = this.prefix + 'kettle/transImage?name=' + name;
  return await this.request(url);
};
*/

exports.transStatus = async function (opts) {
  var url = this.prefix + 'kettle/transStatus?xml=Y&' + new URLSearchParams(opts).toString();
  let xml = await this.request(url);
  let json = fxp.parse(xml);
  return json;
};

exports.prepareExec = async function (opts) {
  var url = this.prefix + 'kettle/prepareExec?xml=Y&' + new URLSearchParams(opts).toString();
  let xml = await this.request(url);
  let json = fxp.parse(xml);
  return json;
};

exports.startExec = async function (opts) {
  var url = this.prefix + 'kettle/startExec?xml=Y&' + new URLSearchParams(opts).toString();
  let xml = await this.request(url);
  let json = fxp.parse(xml);
  return json;
};

exports.startTrans = async function (opts) {
  var url = this.prefix + 'kettle/startTrans?xml=Y&' + new URLSearchParams(opts).toString();
  let xml = await this.request(url);
  let json = fxp.parse(xml);
  return json;
};

exports.runTrans = async function (trans, level = 'Debug') {
  var url = this.prefix + 'kettle/runTrans?trans=' + encodeURIComponent(trans) + '&level=' + level;
  let xml = await this.request(url);
  let json = fxp.parse(xml);
  return json;
};

exports.executeTrans = async function (opts) {
  var url = this.prefix + 'kettle/executeTrans?' + new URLSearchParams(opts).toString();
  let xml = await this.request(url);
  let json = fxp.parse(xml);
  return json;
};

exports.pauseTrans = async function (opts) {
  var url = this.prefix + 'kettle/pauseTrans?xml=Y&' + new URLSearchParams(opts).toString();
  let xml = await this.request(url);
  let json = fxp.parse(xml);
  return json;
};

exports.stopTrans = async function (opts) {
  var url = this.prefix + 'kettle/stopTrans?xml=Y&' + new URLSearchParams(opts).toString();
  let xml = await this.request(url);
  let json = fxp.parse(xml);
  return json;
};

exports.removeTrans = async function (opts) {
  var url = this.prefix + 'kettle/removeTrans?xml=Y&' + new URLSearchParams(opts).toString();
  let xml = await this.request(url);
  let json = fxp.parse(xml);
  return json;
};

exports.cleanupTrans = async function (opts) {
  var url = this.prefix + 'kettle/cleanupTrans?xml=Y&' + new URLSearchParams(opts).toString();
  let xml = await this.request(url);
  let json = fxp.parse(xml);
  return json;
};

exports.sniffStep = async function (opts) {
  var url = this.prefix + 'kettle/sniffStep?xml=Y&' + new URLSearchParams(opts).toString();
  let xml = await this.request(url);
  let json = fxp.parse(xml);
  return json;
};

/*
exports.registerTrans = async function (opts) {
  var url = this.prefix + 'kettle/registerTrans?xml=Y&' + new URLSearchParams(opts).toString();
  return this.request(url);
};
*/