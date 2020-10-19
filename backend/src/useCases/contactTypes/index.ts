import { SQLiteDBConnection } from "../../database/SQLite/SQLiteDBConnectionImp";
import { SQLiteContactTypesRepository } from "../../repositories/contactType/implementations/SQLiteContactTypesRepositoryImp";
import { ContactTypesController } from "./ContactTypesController";
import { ContactTypesUseCase } from "./ContactTypesUseCase";

const sqliteDBConnection = new SQLiteDBConnection();
const sqliteRepository = new SQLiteContactTypesRepository(sqliteDBConnection);
const contactTypesUseCase = new ContactTypesUseCase(sqliteRepository);
const contactTypesController = new ContactTypesController(contactTypesUseCase);

export { contactTypesController }