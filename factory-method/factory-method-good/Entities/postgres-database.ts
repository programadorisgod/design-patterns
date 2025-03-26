import type { Database } from "../Interfaces/Database.interface.ts";

export class PostgresSQLDatabase implements Database {
  connect(): void {
    console.log("Connected to MySQL");
  }
}
