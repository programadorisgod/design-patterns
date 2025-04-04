import { DatabaseFactory } from "../Factories/database-factory.ts";
import { MongoDBDatabaseFactory } from "../Factories/mongodb-database-factory.ts";
import { MySQLDatabaseFactory } from "../Factories/mysql-database-factory.ts";
import { PostgreSQLDatabaseFactory } from "../Factories/postgres-database-factory.ts";
import type { Database } from "../Interfaces/Database.interface.ts";

type databaseTypes = "mysql" | "postgressql" | "mongodb";

export class DatabaseService {
  private databaseFactory: DatabaseFactory;

  private readonly databases: Map<databaseTypes, DatabaseFactory> = new Map([
    ["mysql", new MySQLDatabaseFactory()],
    ["postgressql", new PostgreSQLDatabaseFactory()],
    ["mongodb", new MongoDBDatabaseFactory()],
  ]);

  public connectToDatabase(type: databaseTypes) {
    this.configureFactory(type);
    const database: Database = this.databaseFactory.getDatabase();
    database.connect();
  }

  private configureFactory(type: databaseTypes) {
    const factory = this.databases.get(type);

    if (!factory) {
      throw new Error(`Database type '${type}' is not supported.`);
    }
    
    this.databaseFactory = factory;
  }
}
