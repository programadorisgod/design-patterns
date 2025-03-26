import type { Database } from "../Interfaces/Database.interface.ts";

export abstract class DatabaseFactory {
  public getDatabase(): Database {
    const database: Database = this.createDatabase();

    return database;
  }

  public abstract createDatabase(): Database;
}
