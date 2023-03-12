import { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
   await knex.schema.alterTable('clients', (table) => {
      table.text('state').after('city').notNullable()
   })
}


export async function down(knex: Knex): Promise<void> {
   await knex.schema.alterTable('clients', (table) => {
      table.dropColumn('state')
   })
}

