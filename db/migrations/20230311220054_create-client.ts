import { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
   await knex.schema.createTable('clients', (table) => {
      table.uuid('id').primary()
      table.text('fullname').notNullable()
      table.date('birthday').notNullable()
      table.text('address').notNullable()
      table.text('complement')
      table.integer('houseNumber').notNullable()
      table.text('city').notNullable()
      table.text('country').notNullable()
      table.text('document').notNullable()
      table.text('phone').notNullable()
      table.text('mail').notNullable()
   })
}

export async function down(knex: Knex): Promise<void> {
   await knex.schema.dropTable('clients')
}

