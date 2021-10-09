import 'reflect-metadata';
import express, { Request, Response, NextFunction } from 'express';
import { errors } from 'celebrate';

import 'express-async-errors';
import './typeorm';

import { AppError } from '@shared/errors/AppError';
import routes from './http/routes';

import '@shared/container';

const app = express();

app.use(express.json());
app.use(routes);
app.use(errors());

app.use(
  (err: AppError, _request: Request, response: Response, _: NextFunction) => {
    if (err instanceof AppError) {
      return response.status(err.statusCode).json({
        message: err.message,
      });
    }

    console.log(err);

    return response.status(500).json({
      message: 'Internal server error',
    });
  },
);

app.listen(3333, () => {
  console.info('\x1b[32m', 'Server running ✨', '\x1b[0m');
});
