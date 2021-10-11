import { injectable, inject } from 'tsyringe';

import { IClient } from '../schemas/IClient';
import { IClientsRepository } from '../repositories/IClientsRepository';

@injectable()
class ListClientsService {
  constructor(
    @inject('ClientsRepository')
    private clientsRepository: IClientsRepository,
  ) {}

  public async execute(): Promise<IClient[]> {
    const client = this.clientsRepository.findAll();

    return client;
  }
}

export { ListClientsService };
