import micro from 'micro';
import sourceMap from 'source-map-support';
import routes from './route';

import { name } from '../package.json';

const server = micro(routes());

  const port = process.env.PORT || getPortNumber({ str: name });
  server.listen(port, () => {
    console.log(`> ${name} server is running at ${port}`);
  });