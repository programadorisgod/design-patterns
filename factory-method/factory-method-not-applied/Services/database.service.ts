import { MongoDBDatabase } from "../Entities/mongodb-database.ts";
import { MySQLDatabase } from "../Entities/mysql-database.ts";
import { PostgreSQLDatabase } from "../Entities/postgres-database.ts";

export class DatabaseService {
  connectToDatabase(type: string): string {
    let db;

    if (type === "mysql") {
      db = new MySQLDatabase();
    } else if (type === "postgresql") {
      db = new PostgreSQLDatabase();
    } else if (type === "mongodb") {
      db = new MongoDBDatabase();
    } else {
      throw new Error("Invalid database type");
    }

    return db.connect();
  }
}
