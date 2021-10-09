import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { CreateUserService } from '@modules/users/services/CreateUserService';

export default class UsersController {
  public async create(request: Request, response: Response): Promise<Response> {
    const data = request.body;

    const createUser = container.resolve(CreateUserService);

    const user = await createUser.execute(data);

    return response.json(user);
  }
}
