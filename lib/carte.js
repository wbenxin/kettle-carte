const fetch = require('node-fetch');

class Carte {
  constructor(host, port, username, password) {
    this.host = host;
    this.port = port;
    this.username = username;
    this.password = password

    this.prefix = `http://${host}:${port}/`;
  }

  options = {
    method: 'GET',
    type: 'text',
    retry: 3,
  };

  async request(url, options) {
    let opts = Object.assign({}, this.options, options);

    try {
      return await fetch(url, {
        method: opts.method,
        body: opts.body,
        headers: {
          Authorization: 'Basic ' + Buffer.from(this.username + ":" + this.password).toString('base64')
        }
      }).then(d => {
        switch (opts.type) {
          case 'buffer': return d.buffer();
          case 'json': return d.json();
          default: return d.text();
        }
      });
    } catch (e) {
      if (opts.retry > 0) {
        opts.retry -= 1;
        return await this.request(url, opts);
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