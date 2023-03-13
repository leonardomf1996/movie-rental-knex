import { CreateClientDto } from "../../dtos/create-client-dto";
import { ClientModel } from "../../models/client";

export default interface IClientsRepository {
   createClient(data: CreateClientDto): Promise<ClientModel[]>
   listClients(status: boolean): Promise<ClientModel[]>
   getClient(id: string): Promise<ClientModel | null>
   disableClient(id: string): Promise<void>
}
