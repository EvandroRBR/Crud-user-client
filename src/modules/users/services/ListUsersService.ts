import { inject, injectable } from 'tsyringe';

import { IUsersRepository } from '../repositories/IUsersRepository';

import { IUser } from '../schemas/IUser';

@injectable()
class ListUsersService {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository,
  ) {}

  public async execute(): Promise<IUser[]> {
    const users = await this.usersRepository.findAll();

    return users;
  }
}

export { ListUsersService };
