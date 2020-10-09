const fetch = require('node-fetch');

class Carte {
  constructor(host, port, username, password) {
    this.host = host;
    this.port = port;
    this.username = username;
    this.password = password

    this.prefix = `http://${host}:${port}/`;
  }

  async request(url, retry) {
    if (typeof retry === 'undefined') {
      retry = 3;
    }

    try {
      return await fetch(url, {
        method: 'GET',
        headers: {
          Authorization: 'Basic ' + Buffer.from(this.username + ":" + this.password).toString('base64')
        }
      }).then(d => d.text());
    } catch (e) {
      if (retry > 0) {
        return await this.request(url, retry - 1);
      } else {
        throw e;
      }
    }
  }
}

/**
 * 用于支持对象合并。将对象合并到Carte.prototype上，使得能够支持扩展
 * Examples:
 * ```
 * Carte.mixin(require('./lib/jobs.js'));
 * ```
 * @param {Object} obj 要合并的对象
 */
Carte.mixin = function (obj) {
  for (var key in obj) {
    if (Carte.prototype.hasOwnProperty(key)) {
      throw new Error('Don\'t allow override existed prototype method. method: ' + key);
    }
    Carte.prototype[key] = obj[key];
  }
};

module.exports = Carte;