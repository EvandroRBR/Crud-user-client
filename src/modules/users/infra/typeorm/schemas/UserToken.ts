import { ObjectId } from 'mongodb';
import { uuid } from 'uuidv4';

import {
  ObjectIdColumn,
  Entity,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  Generated,
  BeforeInsert,
} from 'typeorm';

import { IUserToken } from '@modules/users/schemas/IUserToken';

@Entity('user_tokens')
class UserToken implements IUserToken {
  @ObjectIdColumn()
  id: ObjectId;

  @Column()
  @Generated('uuid')
  token: string;

  @Column()
  user_id: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @BeforeInsert()
  beforeInsertActions?(): void {
    if (!this.token) this.token = uuid();
  }
}

export { UserToken };
