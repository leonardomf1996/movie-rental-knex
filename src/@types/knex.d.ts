// eslint-disable-next-line
import { Knex } from 'knex'

declare module 'knex/types/tables' {
   export interface Tables {
      clients: {
         fullname: string,
         birthday: string,
         address: string,
         houseNumber: string,
         complement: string,
         city: string,
         state: string,
         country: string,
         document: string,
         phone: string,
         mail: string,
         status: boolean,
      }
   }
}
