import { PostgresSQLDatabase } from "../Entities/postgres-database.ts";
import type { Database } from "../Interfaces/Database.interface.ts";
import { DatabaseFactory } from "./database-factory.ts";

export class PostgreSQLDatabaseFactory extends DatabaseFactory {
  public createDatabase(): Database {
    return new PostgresSQLDatabase();
  }
}
