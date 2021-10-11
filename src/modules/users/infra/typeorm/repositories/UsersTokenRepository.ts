import { IUserTokensRepository } from '@modules/users/repositories/IUserTokensRepository';
import { IUserToken } from '@modules/users/schemas/IUserToken';
import { getMongoRepository, MongoRepository } from 'typeorm';
import { UserToken } from '../schemas/UserToken';

class UserTokensRepository implements IUserTokensRepository {
  private usersTokenRepository: MongoRepository<UserToken>;

  constructor() {
    this.usersTokenRepository = getMongoRepository<UserToken>(
      UserToken,
      'default',
    );
  }

  public async create(userId: string): Promise<IUserToken> {
    const userToken = this.usersTokenRepository.create({ user_id: userId });

    await this.usersTokenRepository.save(userToken);

    return userToken;
  }
}

export { UserTokensRepository };
