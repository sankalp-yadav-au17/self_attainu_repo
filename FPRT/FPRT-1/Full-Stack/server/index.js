import dotenv from 'dotenv';
dotenv.config()
import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';

import postRoutes from './routes/posts.js';
import userRouter from "./routes/user.js";

const app = express();


app.use(express.json({ limit: '100mb', extended: true }))
app.use(express.urlencoded({ limit: '100mb', extended: true }))
app.use(cors());

app.use('/posts', postRoutes);   //posts
app.use("/user", userRouter); //login or signup

const CONNECTION_URL = process.env.DATABASE_URL;
const PORT = process.env.PORT|| 5000;


mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => app.listen(PORT, () => console.log(`Server Running on Port: http://localhost:${PORT}`)))
  .catch((error) => console.log(`${error} did not connect`));

const buildFolderPath = `E:/backend-project-sankalp-yadav-au17/client/build`
app.use(express.static(buildFolderPath))

//React Router 
app.get('*', (req, res) => {
  res.sendFile(`${buildFolderPath}/index.html`)
})