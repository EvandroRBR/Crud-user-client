import { injectable, inject } from 'tsyringe';

import { AppError } from '@shared/errors/AppError';
import { IClient } from '../schemas/IClient';
import { IClientsRepository } from '../repositories/IClientsRepository';

@injectable()
class ShowClientService {
  constructor(
    @inject('ClientsRepository')
    private clientsRepository: IClientsRepository,
  ) {}

  public async execute(clientId: string): Promise<IClient | undefined> {
    const client = await this.clientsRepository.findById(clientId);

    if (!client) {
      throw new AppError('Cliente não encontrado', 404);
    }

    return client;
  }
}

export { ShowClientService };
