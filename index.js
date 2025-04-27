require('dotenv').config();
const express = require('express');
const app = express();
const login = require('./routes/loginRoutes');
const connectDB = require('./config/db');

connectDB();

app.use(express.json());

app.use('/login', login);

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`server listening on port ${port}`);
});