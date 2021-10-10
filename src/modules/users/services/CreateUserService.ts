import { injectable, inject } from 'tsyringe';

import { ICreateUserDTO } from '@modules/users/dtos/IUserDTO';

import { AppError } from '@shared/errors/AppError';
import { IUsersRepository } from '../repositories/IUsersRepository';
import { IHashProvider } from '../providers/HashProvider/models/IHashProvider';

import { IUser } from '../schemas/IUser';

@injectable()
class CreateUserService {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository,
    @inject('HashProvider')
    private hashProvider: IHashProvider,
  ) {}

  public async execute(data: ICreateUserDTO): Promise<IUser> {
    const checkUserExists = await this.usersRepository.findByEmail(data.email);

    if (checkUserExists) {
      throw new AppError('Email address already used.');
    }

    const hashedPassword = await this.hashProvider.generateHash(data.password);

    data.password = hashedPassword;

    const user = this.usersRepository.create(data);

    return user;
  }
}

export { CreateUserService };
