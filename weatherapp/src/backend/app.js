import Express from "express"
import cors from "cors"

const PORT = process.env.PORT || 3000
const app = Express();

app.use(cors());
app.use(Express.json()); // Middleware tuleva HTTP body -> json muotoon 

console.log('Running')

app.listen(PORT, () => {
    console.log(`Server is runing on ${PORT}`);
  });
  

