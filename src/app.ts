import fastify from 'fastify';
import { clientsRoutes } from './routes/clients';

export const app = fastify();

app.register(clientsRoutes, {
   prefix: 'clients'
})
