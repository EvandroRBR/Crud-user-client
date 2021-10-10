import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { CreateUserService } from '@modules/users/services/CreateUserService';
import { ListUsersService } from '@modules/users/services/ListUsersService';
import { ShowUserService } from '@modules/users/services/ShowUserService';
import { UpdateUserService } from '@modules/users/services/UpdateUserService';
import { DeleteUserService } from '@modules/users/services/DeleteUserService';

export default class UsersController {
  public async index(request: Request, response: Response): Promise<Response> {
    const listUsers = container.resolve(ListUsersService);

    const users = await listUsers.execute();

    return response.json(users);
  }

  public async show(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const showUser = container.resolve(ShowUserService);

    const user = await showUser.execute(id);

    return response.json(user);
  }

  public async create(request: Request, response: Response): Promise<Response> {
    const data = request.body;

    const createUser = container.resolve(CreateUserService);

    const user = await createUser.execute(data);

    return response.json(user);
  }

  public async update(request: Request, response: Response): Promise<Response> {
    const data = request.body;

    Object.assign(data, { id: request.user.id });

    const updateUser = container.resolve(UpdateUserService);

    const user = await updateUser.execute(data);

    return response.json(user);
  }

  public async delete(request: Request, response: Response): Promise<Response> {
    const userId = request.user.id;

    const deleteUser = container.resolve(DeleteUserService);

    await deleteUser.execute(userId);

    return response.json({ message: 'Conta deletada com sucesso' });
  }
}
