import { injectable, inject } from 'tsyringe';

import { AppError } from '@shared/errors/AppError';
import { IClientsRepository } from '../repositories/IClientsRepository';

@injectable()
class DeleteClientsService {
  constructor(
    @inject('ClientsRepository')
    private clientsRepository: IClientsRepository,
  ) {}

  public async execute(clientId: string): Promise<void> {
    const client = this.clientsRepository.findById(clientId);

    if (!client) {
      throw new AppError('Client not found');
    }

    await this.clientsRepository.delete(clientId);
  }
}

export { DeleteClientsService };
