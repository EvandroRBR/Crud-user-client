import { ICreateClientDTO, IUpdateClientDTO } from '../dtos/IClientDTO';
import { IClient } from '../schemas/IClient';

export interface IClientsRepository {
  findByCnpj(cnpj: string): Promise<IClient | undefined>;
  findByFantasyName(fantasy_name: string): Promise<IClient | undefined>;
  findByCorporateName(corporate_name: string): Promise<IClient | undefined>;
  create(data: ICreateClientDTO): Promise<IClient>;
  findAll(): Promise<IClient[]>;
  findById(clientId: string): Promise<IClient | undefined>;
  save(data: IUpdateClientDTO): Promise<IClient | undefined>;
}
