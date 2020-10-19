import Knex from "knex";

export interface IDBConnection {
    connection: Knex;
}