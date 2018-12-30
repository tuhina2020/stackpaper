'use strict';

var _micro = require('micro');

var _micro2 = _interopRequireDefault(_micro);

var _sourceMapSupport = require('source-map-support');

var _sourceMapSupport2 = _interopRequireDefault(_sourceMapSupport);

var _route = require('./route');

var _route2 = _interopRequireDefault(_route);

var _package = require('../package.json');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var server = (0, _micro2.default)(_route2.default);

var port = process.env.PORT || getPortNumber({ str: _package.name });
server.listen(port, function () {
  console.log('> ' + _package.name + ' server is running at ' + port);
});
//# sourceMappingURL=server.js.map