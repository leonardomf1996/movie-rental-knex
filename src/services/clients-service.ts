import { FastifyRequest, FastifyReply } from 'fastify'
import { z } from 'zod'

import { ClientsRepository } from '../repositories/clients-repository';

const clientRepository = ClientsRepository.getInstance()

async function createClient(request: FastifyRequest, reply: FastifyReply) {
   try {
      const createClientBodySchema = z.object({
         fullname: z.string(),
         birthday: z.string(),
         address: z.string(),
         houseNumber: z.string(),
         complement: z.string(),
         city: z.string(),
         state: z.string(),
         country: z.string(),
         document: z.string(),
         phone: z.string(),
         mail: z.string()
      });

      const body = createClientBodySchema.parse(request.body);

      const client = await clientRepository.createClient(body)

      return { client: client[0] }

   } catch (_) {
      throw new Error('400: save data is not successfully')
   }

}

async function listClients(request: FastifyRequest, reply: FastifyReply) {
   try {
      const listClientsQuerySchema = z.object({
         status: z.enum(['1', '0'])
      });

      const { status } = listClientsQuerySchema.parse(request.query);

      const statusParsed = status === '1' ? true : false

      const clients = await clientRepository.listClients(statusParsed)

      return clients

   } catch (_) {
      throw new Error('400: error to list data')
   }
}

async function getClient(request: FastifyRequest, reply: FastifyReply) {
   try {
      const listClientParamSchema = z.object({
         id: z.string()
      });

      const { id } = listClientParamSchema.parse(request.params);

      const client = await clientRepository.getClient(id);

      return client
   } catch (_) {
      throw new Error('400: error to list data')
   }
}

async function disableClient(request: FastifyRequest, reply: FastifyReply) {
   try {
      const disableClientParamSchema = z.object({
         id: z.string()
      });

      const { id } = disableClientParamSchema.parse(request.params);
      
      await clientRepository.disableClient(id);
      
   } catch (_) {
      throw new Error('400: error to diasble data')
   }
}

async function updateClient(request: FastifyRequest, reply: FastifyReply) {
   try {
      const updateClientParamSchema = z.object({
         id: z.string()
      });

      const updateClientBodySchema = z.object({
         fullname: z.string(),
         birthday: z.string(),
         address: z.string(),
         houseNumber: z.string(),
         complement: z.string(),
         city: z.string(),
         state: z.string(),
         country: z.string(),
         phone: z.string(),
         mail: z.string()
      });

      const { id } = updateClientParamSchema.parse(request.params);
      const body = updateClientBodySchema.parse(request.body);
      
      await clientRepository.updateClient(id, body);
      
   } catch (_) {
      throw new Error('400: error to diasble data')
   }
}

export default {
   createClient,
   listClients,
   getClient,
   disableClient,
   updateClient
}
