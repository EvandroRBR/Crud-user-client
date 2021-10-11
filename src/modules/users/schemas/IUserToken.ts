import { ObjectId } from 'mongodb';

class IUserToken {
  id: ObjectId;

  token: string;

  user_id: string;

  created_at: Date;

  updated_at: Date;
}

export { IUserToken };
