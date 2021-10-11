import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { CreateClientService } from '@modules/clients/services/CreateClientService';

export class ClientsController {
  public async create(request: Request, response: Response): Promise<Response> {
    const data = request.body;

    const createClient = container.resolve(CreateClientService);

    const client = await createClient.execute(data);

    return response.json(client);
  }
}
