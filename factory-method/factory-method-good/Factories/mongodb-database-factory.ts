import { MongoDBDatabase } from "../Entities/mongodb-database.ts";
import type { Database } from "../Interfaces/Database.interface.ts";
import { DatabaseFactory } from "./database-factory.ts";

export class MongoDBDatabaseFactory extends DatabaseFactory {
  public createDatabase(): Database {
    return new MongoDBDatabase();
  }
}
