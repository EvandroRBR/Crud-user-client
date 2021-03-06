import { IUserToken } from '../schemas/IUserToken';

export interface IUserTokensRepository {
  create(user_id: string): Promise<IUserToken>;
  findByToken(token: string): Promise<IUserToken | undefined>;
}
