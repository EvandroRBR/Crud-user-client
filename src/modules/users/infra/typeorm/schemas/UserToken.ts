import { ObjectId } from 'mongodb';

import {
  ObjectIdColumn,
  Entity,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  Generated,
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
}

export { UserToken };
