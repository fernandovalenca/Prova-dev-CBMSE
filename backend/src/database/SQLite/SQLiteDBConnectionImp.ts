import Knex from "knex";
import path from 'path'
import { IDBConnection } from "../IDBConnection";

export class SQLiteDBConnection implements IDBConnection {
    connection = Knex({
        client: 'sqlite3',
        connection: {
            filename: path.resolve(__dirname, 'database.sqlite')
        },
        useNullAsDefault: true
    })
};