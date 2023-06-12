import express from "express"
import cors from "cors"; 
import * as dotenv from "dotenv"; 
import { connect } from "./config/db.config.js";
import { userRouter } from "./router/user.routes.js";
// import path from 'path';
// const __dirname = path.resolve();

dotenv.config();
connect();

const app = express()

// app.get('/', function(req, res){
//   res.sendFile(__dirname+'/index.html'); // change the path to your index.html
// });

app.use(express.json());

app.use(cors());
 
app.use(`/`,userRouter);

app.listen(Number(process.env.PORT), () => {
    console.log(`Server connected and running`);
  });