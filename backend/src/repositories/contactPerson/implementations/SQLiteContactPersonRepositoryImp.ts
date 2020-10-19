import { IDBConnection } from "../../../database/IDBConnection";
import { ContactPerson } from "../../../entities/ContactPerson";
import { IContactPersonRepository } from "../IContactPersonRepository";

export class SQLiteContactPersonRepository implements IContactPersonRepository {
    constructor(private dbConnection: IDBConnection) { }

    async index(person_id: string): Promise<ContactPerson[]> {
        try {
            const contactPersonList = await this.dbConnection.connection('contact_person').where('person_id', person_id).select('*');
            return contactPersonList;
        } catch (error) {
            return error
        }
    }

    async save(data: ContactPerson): Promise<void> {
        try {
            const trx = await this.dbConnection.connection.transaction();
            await trx('contact_person').insert(data);
            await trx.commit();
        } catch (error) {
            console.log(error)
        }
    }

    async show(id: string): Promise<ContactPerson> {
        try {
            const contactPerson = await this.dbConnection.connection('contact_person').where('id', id).first();

            return contactPerson;
        } catch (error) {
            console.log(error)
            return error
        }
    }

    async updade(data: ContactPerson): Promise<void> {
        try {
            await this.dbConnection.connection('contact_person').where('id', data.id).update('contact', data.contact).update('contact_type_id', data.contact_type_id);
        } catch (error) {
            console.log(error)
        }
    }

    async delete(id: string, person_id: string): Promise<void> {
        try {
            await this.dbConnection.connection('contact_person').where('id', id).andWhere('person_id', person_id).delete();
        } catch (error) {
            console.log(error)
        }
    }

    async findByContact(contact: string): Promise<ContactPerson> {
        try {
            const contactPerson = await this.dbConnection.connection('contact_person').where('contact', contact).first();

            return contactPerson;
        } catch (error) {
            return error
        }
    }
}