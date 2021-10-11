import { getMongoRepository, MongoRepository } from 'typeorm';
import { ObjectId } from 'mongodb';

import {
  ICreateClientDTO,
  IUpdateClientDTO,
} from '@modules/clients/dtos/IClientDTO';
import { IClientsRepository } from '@modules/clients/repositories/IClientsRepository';
import { IClient } from '@modules/clients/schemas/IClient';

import { Client } from '../schemas/Client';

class ClientsRepository implements IClientsRepository {
  private readonly ormRepository: MongoRepository<Client>;

  constructor() {
    this.ormRepository = getMongoRepository(Client);
  }

  public async findByCnpj(cnpj: string): Promise<IClient | undefined> {
    const clinet = await this.ormRepository.findOne({ where: { cnpj } });

    return clinet;
  }

  public async findByFantasyName(
    fantasy_name: string,
  ): Promise<IClient | undefined> {
    const clinet = await this.ormRepository.findOne({
      where: { fantasy_name },
    });

    return clinet;
  }

  public async findByCorporateName(
    corporate_name: string,
  ): Promise<IClient | undefined> {
    const clinet = await this.ormRepository.findOne({
      where: { corporate_name },
    });

    return clinet;
  }

  public async create(data: ICreateClientDTO): Promise<IClient> {
    const client = this.ormRepository.create(data);

    await this.ormRepository.save(client);

    return client;
  }

  public async findAll(): Promise<IClient[]> {
    const clients = this.ormRepository.find();

    return clients;
  }

  public async findById(clientId: string): Promise<IClient | undefined> {
    const clients = await this.ormRepository.findOne({
      where: { _id: new ObjectId(clientId) },
    });

    return clients;
  }

  public async save(data: IUpdateClientDTO): Promise<IClient | undefined> {
    await this.ormRepository.updateOne(
      {
        _id: new ObjectId(data.id),
      },
      {
        $set: { ...data },
      },
    );

    const updatedClient = await this.ormRepository.findOne({
      where: { _id: new ObjectId(data.id) },
    });

    return updatedClient;
  }
}

export { ClientsRepository };
