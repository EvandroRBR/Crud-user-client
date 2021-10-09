import express from 'express';

import routes from './http/routes';
import './typeorm';

const app = express();

app.use(express.json());

app.use(routes);

app.listen(3333, () => {
  console.info('\x1b[32m', 'Server running ✨', '\x1b[0m');
});
