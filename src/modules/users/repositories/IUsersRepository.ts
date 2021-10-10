import { User } from '../infra/typeorm/schemas/Users';
import { ICreateUserDTO } from '../dtos/ICreateUserDTO';

export interface IUsersRepository {
  findByEmail(email: string): Promise<User | undefined>;
  create(data: ICreateUserDTO): Promise<User>;
  findAll(): Promise<User[]>;
  findById(userId: string): Promise<User | undefined>;
}
