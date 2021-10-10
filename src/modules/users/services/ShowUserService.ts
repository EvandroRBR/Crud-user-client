import { injectable, inject } from 'tsyringe';

import { AppError } from '@shared/errors/AppError';
import { IUsersRepository } from '../repositories/IUsersRepository';

import { IUser } from '../schemas/IUser';

@injectable()
class ShowUserService {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository,
  ) {}

  public async execute(userId: string): Promise<IUser> {
    const user = await this.usersRepository.findById(userId);

    if (!user) {
      throw new AppError('User does not found', 404);
    }

    return user;
  }
}

export { ShowUserService };
