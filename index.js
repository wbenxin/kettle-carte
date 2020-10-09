const Carte = require('./lib/carte');

Carte.mixin(require('./lib/server'));
Carte.mixin(require('./lib/jobs'));
Carte.mixin(require('./lib/transformations'));

module.exports = Carte;