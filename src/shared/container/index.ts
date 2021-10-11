import { container } from 'tsyringe';

import '@modules/users/providers';
import './providers';

import { UsersRepository } from '@modules/users/infra/typeorm/repositories/UsersRepository';
import { IUsersRepository } from '@modules/users/repositories/IUsersRepository';

import { ClientsRepository } from '@modules/clients/infra/typeorm/repositories/ClientsRepository';
import { IClientsRepository } from '@modules/clients/repositories/IClientsRepository';

import { UserTokensRepository } from '@modules/users/infra/typeorm/repositories/UsersTokenRepository';
import { IUserTokensRepository } from '@modules/users/repositories/IUserTokensRepository';

container.registerSingleton<IUsersRepository>(
  'UsersRepository',
  UsersRepository,
);

container.registerSingleton<IClientsRepository>(
  'ClientsRepository',
  ClientsRepository,
);

container.registerSingleton<IUserTokensRepository>(
  'UserTokensRepository',
  UserTokensRepository,
);
