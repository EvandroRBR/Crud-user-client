import { IUserTokensRepository } from '@modules/users/repositories/IUserTokensRepository';
import { IUserToken } from '@modules/users/schemas/IUserToken';
import { getMongoRepository, MongoRepository } from 'typeorm';
import { UserToken } from '../schemas/UserToken';

class UserTokensRepository implements IUserTokensRepository {
  private ormRepository: MongoRepository<UserToken>;

  constructor() {
    this.ormRepository = getMongoRepository<UserToken>(UserToken, 'default');
  }

  public async create(userId: string): Promise<IUserToken> {
    const userToken = this.ormRepository.create({ user_id: userId });

    await this.ormRepository.save(userToken);

    return userToken;
  }

  public async findByToken(token: string): Promise<IUserToken | undefined> {
    const userToken = await this.ormRepository.findOne({ where: { token } });

    return userToken;
  }
}

export { UserTokensRepository };
