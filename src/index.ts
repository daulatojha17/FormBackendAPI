import express from 'express';
import cors from "cors";
import router  from './routes/form.routes.ts';
import dotenv from 'dotenv'

dotenv.config({
    path : './.env'
});


const app = express();
app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials:true,

}))

app.use(express.json({limit:"16kb"}))
app.use(express.urlencoded({extended : true, limit:"16kb"}))
app.use("", router);


app.listen(process.env.PORT, () => {
    console.log(`Server is running at http://localhost:${process.env.PORT}`);
});
