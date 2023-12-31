import "reflect-metadata";
import Express from "express";
import cors from "cors";
import morgan from "morgan";
import { AppDataSource } from "./database/connection";
import userRoutes from "./routes/userRoutes";
import { saveUser } from "./database/connection";
import dotenv from "dotenv"


dotenv.config()
const PORT = process.env.PORT || 3000;
const app = Express();

app.use(cors());
app.use(Express.json()); // Middleware tuleva HTTP body -> json muotoon
app.use(
  morgan(":method :url :status :res[content-length] - :response-time ms")
);

app.use("/api/users",userRoutes);

app.listen(PORT, () => {
  console.log(`Server is runing on ${PORT}`);
});

// Database
AppDataSource.initialize()
  .then(() => {
    console.log("Connected to database");
    // saveUser() Poista tämä kommentti jos haluat luoda vakio käyttäjän käynnistyksen yhteydessä tietokantaan
  })
  .catch((error) => console.error("Unable to connect ",error));
