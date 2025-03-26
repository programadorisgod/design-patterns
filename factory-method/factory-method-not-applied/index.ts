import { DatabaseService } from "./Services/database.service.ts";

// Uso incorrecto:
const dbService = new DatabaseService();
console.log(dbService.connectToDatabase("mysql"));
console.log(dbService.connectToDatabase("postgresql"));
console.log(dbService.connectToDatabase("mongodb"));
