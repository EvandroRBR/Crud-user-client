import { ICreateClientDTO } from '../dtos/IClientDTO';
import { IClient } from '../schemas/IClient';

export interface IClientsRepository {
  findByCnpj(cnpj: string): Promise<IClient | undefined>;
  findByFantasyName(fantasy_name: string): Promise<IClient | undefined>;
  findByCorporateName(corporate_name: string): Promise<IClient | undefined>;
  create(data: ICreateClientDTO): Promise<IClient>;
  findAll(): Promise<IClient[]>;
}
