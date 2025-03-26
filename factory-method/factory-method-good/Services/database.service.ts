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
    ["postgressql", new MongoDBDatabaseFactory()],
    ["mongodb", new PostgreSQLDatabaseFactory()],
  ]);

  public connectToDatabase(type: databaseTypes) {
    this.configureFactory(type);
    const database: Database = this.databaseFactory.getDatabase();
    database.connect();
  }

  private configureFactory(type: databaseTypes) {
    if (!this.databases.has(type)) {
      this.databaseFactory = this.databases.get("postgressql")!;
      return;
    }

    this.databaseFactory = this.databases.get(type)!;
  }
}
