import { getMongoRepository, MongoRepository } from 'typeorm';
import { ObjectId } from 'mongodb';

import { ICreateUserDTO } from '@modules/users/dtos/ICreateUserDTO';
import { IUsersRepository } from '@modules/users/repositories/IUsersRepository';
import { User } from '@modules/users/infra/typeorm/schemas/Users';

class UsersRepository implements IUsersRepository {
  private readonly ormRepository: MongoRepository<User>;

  constructor() {
    this.ormRepository = getMongoRepository(User);
  }

  public async findByEmail(email: string): Promise<User | undefined> {
    const user = await this.ormRepository.findOne({ where: { email } });

    return user;
  }

  public async create(data: ICreateUserDTO): Promise<User> {
    const user = this.ormRepository.create(data);

    await this.ormRepository.save(user);

    return user;
  }

  public async findAll(): Promise<User[]> {
    const user = this.ormRepository.find();

    return user;
  }

  public async findById(userId: string): Promise<User | undefined> {
    const user = await this.ormRepository.findOne({
      where: { _id: new ObjectId(userId) },
    });

    return user;
  }
}

export { UsersRepository };
