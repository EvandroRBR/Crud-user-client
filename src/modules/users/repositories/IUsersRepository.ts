import { IUser } from '../schemas/IUser';
import { ICreateUserDTO, IUpdateUserDTO } from '../dtos/IUserDTO';

export interface IUsersRepository {
  findByEmail(email: string): Promise<IUser | undefined>;
  create(data: ICreateUserDTO): Promise<IUser>;
  findAll(): Promise<IUser[]>;
  findById(userId: string): Promise<IUser | undefined>;
  save(data: IUpdateUserDTO): Promise<IUser | undefined>;
}
