import Knex from 'knex';

export async function up(knex: Knex) {
    return knex.schema.createTable('contact_person', table => {
        table.string('id').primary().notNullable();

        table.integer('contact_type_id').notNullable().references('id').inTable('contact_type');
        table.string('person_id').notNullable().references('id').inTable('person');
        table.string('contact').notNullable();
    })
}

export async function down(knex: Knex) {
    return knex.schema.dropTable('contact_person');
}