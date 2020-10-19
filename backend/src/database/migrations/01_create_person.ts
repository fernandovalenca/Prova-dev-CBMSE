import Knex from 'knex';

export async function up(knex: Knex) {
    return knex.schema.createTable('person', table => {
        table.string('id').primary().notNullable();
        table.string('first_name').notNullable();
        table.string('second_name').notNullable();
    })
}

export async function down(knex: Knex) {
    return knex.schema.dropTable('person');
}