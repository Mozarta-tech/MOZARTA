

const express = require('express');
const { errorHandler } = require('./middleware/errormiddleware');
const dotenv = require('dotenv').config();
const connectDB = require('./connect/database');
const {errorHandler}= require('./middlewares/errorMiddleware');

const port =  process.env.PORT //8000;
connectDB();
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/api/tasks',require ('./routes/taskRoutes'));


 app.listen(port, () => console.log(`Server is running on ${port}`))

