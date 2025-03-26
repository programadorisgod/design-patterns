import type { Database } from "../Interfaces/Database.interface.ts";

export class MongoDBDatabase implements Database {
  connect(): void {
    console.log("Connected to MongoDB");
  }
}
