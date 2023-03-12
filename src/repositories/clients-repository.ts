import { randomUUID } from "node:crypto";
import { CreateClientDto } from "../dtos/create-client-dto";
import IClientsRepository from "./interfaces/Iclients-repository";
import { knex } from '../database';
import { ClientModel } from "../models/client";

export class ClientsRepository implements IClientsRepository {
   private static instance: ClientsRepository

   public static getInstance(): ClientsRepository {
      if (!ClientsRepository.instance) {
         ClientsRepository.instance = new ClientsRepository()
      }
      return ClientsRepository.instance
   }

   async createClient(data: CreateClientDto): Promise<ClientModel[]> {
      const client = {
         id: randomUUID(),
         ...data
      }

      return await knex('clients').insert(client).returning('*')
   }

   async listClients(status: boolean): Promise<ClientModel[]> {
      const clients = await knex('clients').select('*').where('status', status)
      return clients
   }

}