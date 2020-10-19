import Knex from 'knex';
export async function seed(knex: Knex) {
    await knex('contact_type').insert([
        { name: 'Telefone' },
        { name: 'Celular' },
        { name: 'E-mail' },
        { name: 'Outros' }
    ])
}