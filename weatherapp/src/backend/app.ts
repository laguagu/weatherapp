import "reflect-metadata";
import Express from "express";
import cors from "cors";
import morgan from "morgan";
import { DataSource } from "typeorm";
import { User } from "./models/User";

const PORT = process.env.PORT || 3000;
const app = Express();

app.use(cors());
app.use(Express.json()); // Middleware tuleva HTTP body -> json muotoon
app.use(
  morgan(":method :url :status :res[content-length] - :response-time ms")
);

// app.get("/", getMessage)

app.listen(PORT, () => {
  console.log(`Server is runing on ${PORT}`);
});

const AppDataSource = new DataSource({
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

AppDataSource.initialize()
  .then(() => {
    console.log("Connected to database");
    saveUser();
  })
  .catch((error) => console.error(error));

const newUser = new User();
newUser.username = "saku";
newUser.password = "saku";
newUser.balance = 500;
newUser.depth = 100;

async function saveUser() {
  await AppDataSource.manager.save(newUser);
}

export default AppDataSource
