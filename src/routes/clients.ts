import { FastifyInstance } from "fastify";
import ClientService from '../services/clients-service'

export async function clientsRoutes(app: FastifyInstance) {
   app.post('/', async (request, reply) => {
      const data = await ClientService.createClient(request, reply)
      return reply.status(201).send(data);
   })

   app.get('/', async (request, reply) => {
      const data = await ClientService.listClients(request, reply)
      return reply.status(200).send(data);
   })
}
