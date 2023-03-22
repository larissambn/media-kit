import express from "express"
import cors from "cors"; 
import * as dotenv from "dotenv"; 
import { connect } from "./config/db.config.js";
import { userRouter } from "./router/user.routes.js"

dotenv.config();
connect();

const app = express()
app.use(express.json());

app.use(cors());
 
app.use(`/`,userRouter);

app.listen(Number(process.env.PORT), () => {
    console.log(`Server running`);
  });