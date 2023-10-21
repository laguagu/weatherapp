import { DataSource } from "typeorm";
import { User } from "../models/User";

export const AppDataSource = new DataSource({
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "postgres",
  password: "admin",
  database: "weatherapp",
  entities: [User],
  synchronize: true,
  logging: false,
});

const newUser = new User();
newUser.username = "saku";
newUser.password = "saku";
newUser.balance = 500;
newUser.depth = 100;

export async function saveUser() {
  await AppDataSource.manager.save(newUser);
  console.log("New user added");
}

export async function fetchAndPrintUser() {
  const savedUser = await AppDataSource.manager.find(User);
  console.log(savedUser);
}