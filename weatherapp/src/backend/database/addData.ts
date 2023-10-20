import { User } from "../models/User";
import AppDataSource from "../app";

const newUser = new User();
newUser.username = "saku";
newUser.password = "saku";
newUser.balance = 500;
newUser.depth = 100;

async function saveUser() {
  await AppDataSource.manager.save(newUser);
}