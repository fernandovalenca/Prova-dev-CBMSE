import { SQLiteDBConnection } from "../../database/SQLite/SQLiteDBConnectionImp";
import { SQLiteContactPersonRepository } from "../../repositories/contactPerson/implementations/SQLiteContactPersonRepositoryImp";
import { ContactPersonController } from "./ContactPersonController";
import { ContactPersonUseCase } from "./ContactPersonUseCase";

const sqliteDBConnection = new SQLiteDBConnection();
const sqliteContactPersonRepository = new SQLiteContactPersonRepository(sqliteDBConnection);
const contactPersonUseCase = new ContactPersonUseCase(sqliteContactPersonRepository);
const contactPersonController = new ContactPersonController(contactPersonUseCase);

export { contactPersonController }