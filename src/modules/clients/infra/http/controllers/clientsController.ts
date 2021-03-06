import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { ObjectID } from 'mongodb';

import { AppError } from '@shared/errors/AppError';

import { CreateClientService } from '@modules/clients/services/CreateClientService';
import { ListClientsService } from '@modules/clients/services/ListClientsService';
import { ShowClientService } from '@modules/clients/services/ShowClientService';
import { UpdateClientService } from '@modules/clients/services/UpdateUserService';
import { DeleteClientsService } from '@modules/clients/services/DeleteClientsService';

export class ClientsController {
  public async create(request: Request, response: Response): Promise<Response> {
    const data = request.body;

    const createClient = container.resolve(CreateClientService);

    const client = await createClient.execute(data);

    return response.json(client);
  }

  public async index(request: Request, response: Response): Promise<Response> {
    const listClients = container.resolve(ListClientsService);

    const clients = await listClients.execute();

    return response.json(clients);
  }

  public async show(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    if (!ObjectID.isValid(id)) {
      throw new AppError('Id is in invalid format');
    }

    const showClient = container.resolve(ShowClientService);

    const clients = await showClient.execute(id);

    return response.json(clients);
  }

  public async update(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    if (!ObjectID.isValid(id)) {
      throw new AppError('Id is in invalid format');
    }
    const data = request.body;

    Object.assign(data, { id });

    const updateClient = container.resolve(UpdateClientService);

    const clients = await updateClient.execute(data);

    return response.json(clients);
  }

  public async delete(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    if (!ObjectID.isValid(id)) {
      throw new AppError('Id is in invalid format');
    }

    const deleteCliente = container.resolve(DeleteClientsService);

    await deleteCliente.execute(id);

    return response.json({ message: 'Client was deleted' });
  }
}
