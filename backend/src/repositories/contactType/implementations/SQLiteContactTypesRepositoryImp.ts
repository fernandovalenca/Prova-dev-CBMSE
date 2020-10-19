import { IDBConnection } from "../../../database/IDBConnection";
import { ContactType } from "../../../entities/ContactType";
import { IContactTypesRepository } from "../IContactTypesRepository";

export class SQLiteContactTypesRepository implements IContactTypesRepository {
    constructor(private dbConnection: IDBConnection) { }

    async index(): Promise<ContactType[]> {
        const contactTypesList: ContactType[] = await this.dbConnection.connection('contact_type').select('*');

        return contactTypesList;
    }
}