import { IClient } from '@modules/clients/schemas/IClient';
import { ObjectId } from 'mongodb';
import {
  Entity,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  ObjectIdColumn,
} from 'typeorm';

@Entity('clients')
class Client implements IClient {
  @ObjectIdColumn()
  id: ObjectId;

  @Column()
  cnpj: string;

  @Column()
  fantasy_name: string;

  @Column()
  corporate_name: string;

  @Column()
  zip_code: string;

  @Column()
  address: string;

  @Column()
  number: string;

  @Column()
  complement: string;

  @Column()
  neighbourhood: string;

  @Column()
  city: string;

  @Column()
  state: string;

  @CreateDateColumn()
  created_at: string;

  @UpdateDateColumn()
  updated_at: string;
}

export { Client };
