import { injectable, inject } from 'tsyringe';

import { AppError } from '@shared/errors/AppError';
import { IUpdateClientDTO } from '@modules/clients/dtos/IClientDTO';

import { IClient } from '../schemas/IClient';
import { IClientsRepository } from '../repositories/IClientsRepository';

@injectable()
class UpdateClientService {
  constructor(
    @inject('ClientsRepository')
    private clientsRepository: IClientsRepository,
  ) {}

  public async execute(data: IUpdateClientDTO): Promise<IClient | undefined> {
    const client = await this.clientsRepository.findById(data.id);

    if (!client) {
      throw new AppError('Client does not found', 404);
    }

    if (data.cnpj) {
      const checkCnpjInUse = await this.clientsRepository.findByCnpj(data.cnpj);

      if (checkCnpjInUse) {
        throw new AppError('CNPJ already used');
      }
    }

    if (data.fantasy_name) {
      const checkFantasyNameInUse = await this.clientsRepository.findByFantasyName(
        data.fantasy_name,
      );

      if (checkFantasyNameInUse) {
        throw new AppError('Fantasy name already used');
      }
    }

    if (data.corporate_name) {
      const checkCorporateNameInUse = await this.clientsRepository.findByCorporateName(
        data.corporate_name,
      );

      if (checkCorporateNameInUse) {
        throw new AppError('Corporate name name already used');
      }
    }

    const updatedClient = await this.clientsRepository.save(data);

    return updatedClient;
  }
}

export { UpdateClientService };
