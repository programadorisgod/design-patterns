import { DatabaseService } from "./Services/database.service.ts";

const dbService = new DatabaseService();

dbService.connectToDatabase("mysql");
dbService.connectToDatabase("postgressql");
dbService.connectToDatabase("mongodb");
