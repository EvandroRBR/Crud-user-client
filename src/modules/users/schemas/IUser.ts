import { ObjectId } from 'mongodb';

interface IUser {
  id: ObjectId;
  name: string;
  surname: string;
  phone: string;
  email: string;
  password: string;
}

export { IUser };
