import { ObjectId } from 'mongodb';

export interface ICreateUserDTO {
  name: string;
  surname: string;
  phone: string;
  email: string;
  password: string;
}

export interface IUpdateUserDTO {
  id: string | ObjectId;
  name?: string;
  surname?: string;
  phone?: string;
  email?: string;
  old_password?: string;
  password?: string;
}
