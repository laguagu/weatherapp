import "reflect-metadata";
import Express from "express"
import cors from "cors"
import morgan from "morgan";


const PORT = process.env.PORT || 3000
const app = Express();

app.use(cors());
app.use(Express.json()); // Middleware tuleva HTTP body -> json muotoon 
app.use(morgan(':method :url :status :res[content-length] - :response-time ms'))

// app.get("/", getMessage)
console.log("hello");
console.log("testi");

app.listen(PORT, () => {
    console.log(`Server is runing on ${PORT}`);
  });
  

