import { injectable, inject } from 'tsyringe';

import { AppError } from '@shared/errors/AppError';
import { IUpdateUserDTO } from '@modules/users/dtos/IUserDTO';
import { IHashProvider } from '../providers/HashProvider/models/IHashProvider';
import { IUsersRepository } from '../repositories/IUsersRepository';

import { IUser } from '../schemas/IUser';

@injectable()
class UpdateUserService {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository,

    @inject('HashProvider')
    private hashProvider: IHashProvider,
  ) {}

  public async execute(data: IUpdateUserDTO): Promise<IUser | undefined> {
    const user = await this.usersRepository.findById(data.id);

    if (!user) {
      throw new AppError('User not found.', 404);
    }

    if (data.email) {
      const userWithUpdateEmail = await this.usersRepository.findByEmail(
        data.email,
      );

      if (
        userWithUpdateEmail &&
        userWithUpdateEmail.id.toHexString() !== data.id
      ) {
        throw new AppError('Email already in use.', 401);
      }
    }

    if (data.password && !data.old_password) {
      throw new AppError(
        'You need to inform the old password to set a new password.',
        403,
      );
    }

    if (data.password && data.old_password) {
      const checkOldPassword = await this.hashProvider.compareHash(
        data.old_password,
        user.password,
      );

      if (!checkOldPassword) {
        throw new AppError('Old password does not match.', 403);
      }

      data.password = await this.hashProvider.generateHash(data.password);
    }

    const updatedUser = await this.usersRepository.save(data);

    return updatedUser;
  }
}

export { UpdateUserService };
