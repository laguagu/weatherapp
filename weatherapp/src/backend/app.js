import Express from "express"
import cors from "cors"
import morgan from "morgan";
import { getMessage } from "./controllers/userController.js";
import { User } from "./models/UserEntity.js";

const PORT = process.env.PORT || 3000
const app = Express();

app.use(cors());
app.use(Express.json()); // Middleware tuleva HTTP body -> json muotoon 
app.use(morgan(':method :url :status :res[content-length] - :response-time ms'))

app.get("/", getMessage)

app.listen(PORT, () => {
    console.log(`Server is runing on ${PORT}`);
  });
  

