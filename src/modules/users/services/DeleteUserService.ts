import { injectable, inject } from 'tsyringe';

import { AppError } from '@shared/errors/AppError';
import { IUsersRepository } from '../repositories/IUsersRepository';

@injectable()
class DeleteUserService {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository,
  ) {}

  public async execute(userId: string): Promise<void> {
    const user = await this.usersRepository.findById(userId);

    if (!user) {
      throw new AppError('User not found.', 404);
    }

    const teste = await this.usersRepository.delete(userId);
    console.log(teste);
  }
}

export { DeleteUserService };
