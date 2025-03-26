import { userBuilder } from "./concreteBuilder.ts";
import { User } from "./user.ts";
import { UserNew } from "./userNew.ts";

const user: User = new User(
  "23dg2",
  "hector",
  "pedro",
  "lucianore",
  "female",
  "304200202",
  "upc",
  "Barcelona"
);
console.log(user.id, user.name);

let user1: UserNew = new userBuilder()
  .setId("2334")
  .setName("Julio")
  .setLastName("Pinheas")
  .build();

console.log(user1);

user1 = user1.update({ address: "Manzana 405 casa 2" });

console.log(user1);
