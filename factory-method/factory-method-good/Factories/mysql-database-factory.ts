import { MySQLDatabase } from "../Entities/mysql-database.ts";
import type { Database } from "../Interfaces/Database.interface.ts";
import { DatabaseFactory } from "./database-factory.ts";

export class MySQLDatabaseFactory extends DatabaseFactory {
  public createDatabase(): Database {
    return new MySQLDatabase();
  }
}
