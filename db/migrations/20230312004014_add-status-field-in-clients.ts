import { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
   await knex.schema.alterTable('clients', (table) => {
      table.boolean('status').notNullable().defaultTo(true)
   })
}


export async function down(knex: Knex): Promise<void> {
   await knex.schema.alterTable('clients', (table) => {
      table.dropColumn('status')
   })
}

