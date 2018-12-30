'use strict';

var _promise = require('babel-runtime/core-js/promise');

var _promise2 = _interopRequireDefault(_promise);

var _microExRouter = require('micro-ex-router');

var _microExRouter2 = _interopRequireDefault(_microExRouter);

var _controller = require('../controller');

var _controller2 = _interopRequireDefault(_controller);

var _utils = require('utils');

var _package = require('../../package.json');

var _cors = require('cors');

var _cors2 = _interopRequireDefault(_cors);

var _compression = require('compression');

var _compression2 = _interopRequireDefault(_compression);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var options = {
  parseBody: true,
  limit: '1mb',
  encoding: 'utf8',
  acceptedMethods: ['get', 'post', 'put', 'patch', 'delete', 'head', 'options']
};

// const noauth = compose(
//   handleResponse({})
// );

// const { handleResponse, authenticate } = decorators;
var auth = (0, _utils.compose)((0, _cors2.default)({})
// handleResponse({}),
// authenticate({
//   Mongo
// })
);

var router = (0, _microExRouter2.default)(options);
router.use(function (req, res) {
  return new _promise2.default(function (next) {
    return (0, _cors2.default)()(req, res, next);
  });
}).use(function (req, res) {
  return new _promise2.default(function (next) {
    return (0, _compression2.default)()(req, res, next);
  });
}).get('/' + _package.name + '/dummy', _controller2.default.dummy).options('/' + _package.name + '*', function () {});

module.exports = router;
//# sourceMappingURL=index.js.map