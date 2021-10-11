import { injectable, inject } from 'tsyringe';

import { AppError } from '@shared/errors/AppError';

import { ICreateClientDTO } from '@modules/clients/dtos/IClientDTO';
import { IClient } from '../schemas/IClient';
import { IClientsRepository } from '../repositories/IClientsRepository';

@injectable()
class CreateClientService {
  constructor(
    @inject('ClientsRepository')
    private clientsRepository: IClientsRepository,
  ) {}

  public async execute(data: ICreateClientDTO): Promise<IClient> {
    const checkCnpjInUse = await this.clientsRepository.findByCnpj(data.cnpj);

    if (checkCnpjInUse) {
      throw new AppError('CNPJ already used');
    }

    const checkFantasyNameInUse = await this.clientsRepository.findByFantasyName(
      data.fantasy_name,
    );

    if (checkFantasyNameInUse) {
      throw new AppError('Fantasy name already used');
    }

    const checkCorporateNameInUse = await this.clientsRepository.findByCorporateName(
      data.corporate_name,
    );

    if (checkCorporateNameInUse) {
      throw new AppError('Corporate name name already used');
    }

    const client = this.clientsRepository.create(data);

    return client;
  }
}

export { CreateClientService };
