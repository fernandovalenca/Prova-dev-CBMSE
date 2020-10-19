import { IDBConnection } from "../../../database/IDBConnection";
import { Person } from "../../../entities/Person";
import { IPersonRepository } from "../IPersonRepository";

export class SQLitePersonRepository implements IPersonRepository {
    constructor(private dbConnection: IDBConnection) { }

    async index(): Promise<Person[]> {
        const persons = await this.dbConnection.connection('person').select('*');

        return persons
    }

    async findPersonById(id: string): Promise<Person> {
        const person = await this.dbConnection.connection('person').where('id', id).first();

        return person;
    }

    async findPersonByCompleteName(first_name: string, second_name: string): Promise<Person> {
        const person = await this.dbConnection.connection('person').where('first_name', first_name).andWhere('second_name', second_name).first();

        return person;
    }

    async save(person: Person): Promise<void> {
        try {
            const trx = await this.dbConnection.connection.transaction();
            await trx('person').insert(person);
            await trx.commit();
        } catch (error) {
            console.log(error);
        }
    }

    async delete(id: string): Promise<void> {
        await this.dbConnection.connection('person').where('id', id).delete();
    }

    async update(person: Person): Promise<void> {

        try {
            await this.dbConnection.connection('person').where('id', person.id).update('first_name', person.first_name);
        } catch (error) {
            console.log({ message: error.message })
        }
    }
}