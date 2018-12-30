import Router from 'micro-ex-router';
import Controller from '../controller';
import { compose } from 'utils';
// const { handleResponse, authenticate } = decorators;
import { name } from '../../package.json';
import cors from 'cors';
import compression from 'compression';

const options = {
  parseBody: true,
  limit: '1mb',
  encoding: 'utf8',
  acceptedMethods: ['get', 'post', 'put', 'patch', 'delete', 'head', 'options']
};

// const noauth = compose(
//   handleResponse({})
// );

const router = Router(options);
router
  .use((req, res) => new Promise(next => cors()(req, res, next)))
	.use((req, res) => new Promise(next => compression()(req, res, next)))
  .get(`/${name}/dummy`, Controller.dummy)
	.options(`/${name}*`, () => {});

module.exports = router;