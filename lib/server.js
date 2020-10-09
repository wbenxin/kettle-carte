const fxp = require('fast-xml-parser');

exports.allocateSocket = async function (opts) {
  var url = this.prefix + 'kettle/allocateSocket?xml=Y&' + new URLSearchParams(opts).toString();
  return await this.request(url);
};

exports.listSocket = async function (host) {
  var url = this.prefix + 'kettle/listSocket?host=' + host;
  return await this.request(url);
};

exports.nextSequence = async function (name) {
  var url = this.prefix + 'kettle/nextSequence?name=' + name;
  let xml = await this.request(url);
  let json = fxp.parse(xml);
  return json;
};

/*
exports.registerSlave = async function (opts) {
  var url = this.prefix + 'kettle/registerSlave';
  return this.request(url);
};
*/

exports.getSlaves = async function () {
  var url = this.prefix + 'kettle/getSlaves';
  let xml = await this.request(url);
  let json = fxp.parse(xml);
  return json;
};

exports.status = async function () {
  var url = this.prefix + 'kettle/status/?xml=Y';
  let xml = await this.request(url);
  let json = fxp.parse(xml);
  return json;
};

exports.stopCarte = async function () {
  var url = this.prefix + 'kettle/stopCarte';
  return this.request(url);
};
