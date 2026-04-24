

const express = require('express');
const { errorHandler } = require('./middleware/errormiddleware');
const dotenv = require('dotenv').config();

const port =  process.env.PORT //8000;

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/api/tasks',require ('./routes/taskRoutes'));


 app.listen(port, () => console.log(`Server is running on ${port}`))

