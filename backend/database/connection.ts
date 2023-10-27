import { DataSource } from "typeorm";
import { User } from "../database/User";

export const AppDataSource = new DataSource({
  type: "postgres",
  host: process.env.DB_HOST || "localhost",
  port: 5432,
  username: process.env.DB_USERNAME || "postgres",
  password: process.env.DB_PASSWORD || "admin",
  database: process.env.DB_NAME || "weatherapp",
  entities: [User],
  synchronize: true,
  logging: false,
});



const userRepository = AppDataSource.getRepository(User)

const newUser = new User();
newUser.username = "saku";
newUser.password = "saku";
newUser.balance = 500;
newUser.debt = 100;

// Lisää saveUser() App.ts tiedostoon initialize metodiin jos haluat käynnistäessä dataa tietokantaan
export async function saveUser() {
  await userRepository.save(newUser)
  console.log("New user added");
}