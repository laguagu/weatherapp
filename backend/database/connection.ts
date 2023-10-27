import { DataSource } from "typeorm";
import { User } from "../database/User";

export const AppDataSource = new DataSource({
  type: "postgres",
  host: process.env.DB_HOST || "localhost",
  port: 5432,
  username: "postgres", // 1. Tietokantasi käyttäjänimi
  password: "admin", // 2. Tietokantasi salasana
  database: "weatherapp", // 3. Tietokantasi nimi (Kohdat 1,2,3 pitää asettaa paikallisesti samalla tavalla)
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