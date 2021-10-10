import { User } from '../infra/typeorm/schemas/Users';
import { ICreateUserDTO, IUpdateUserDTO } from '../dtos/IUserDTO';

export interface IUsersRepository {
  findByEmail(email: string): Promise<User | undefined>;
  create(data: ICreateUserDTO): Promise<User>;
  findAll(): Promise<User[]>;
  findById(userId: string): Promise<User | undefined>;
  save(data: IUpdateUserDTO): Promise<User | undefined>;
}
