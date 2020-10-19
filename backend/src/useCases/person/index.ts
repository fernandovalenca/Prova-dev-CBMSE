import { SQLiteDBConnection } from "../../database/SQLite/SQLiteDBConnectionImp";
import { SQLitePersonRepository } from "../../repositories/person/implementations/SQLitePersonRepositoryImp";
import { PersonController } from "./PersonController";
import { PersonUseCase } from "./PersonUseCase";

const sqliteDBConnection = new SQLiteDBConnection();
const sqlitePersonRepository = new SQLitePersonRepository(sqliteDBConnection);
const personUseCase = new PersonUseCase(sqlitePersonRepository);
const personController = new PersonController(personUseCase);

export { personController }