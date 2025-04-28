require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();
const loginRouter = require('./routes/loginRoutes');
const fileUploadRouter = require('./routes/uploadFilesRoutes');
const connectDB = require('./config/db');

connectDB();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use('/login', loginRouter);
app.use('/upload_files', fileUploadRouter);

// global error handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(400).json({
    msg: err.message || 'Something went wrong'
  });
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`server listening on port ${port}`);
});