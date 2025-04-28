require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();
const loginRouter = require('./routes/loginRoutes');
const fileUploadRouter = require('./routes/uploadFilesRoutes');
const gamesRouter = require('./routes/gamesRoutes');
const connectDB = require('./config/db');

const fs = require('fs');
const path = require('path');

connectDB();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use('/login', loginRouter);
app.use('/upload_files', fileUploadRouter);
app.use('/', gamesRouter);

app.use('/uploads', express.static('uploads'));

// app.get('/', (req, res) => {
//   const uploadsDir = path.join(__dirname, 'uploads');

//   fs.readdir(uploadsDir, (err, files) => {
//     if(err){
//       console.error(`error reading uploads directory: ${err}`);
//       return res.status(500).send('server error');
//     }
//     const htmlFiles = files.filter(file => file.endsWith('.html'));

//     let buttonsHtml = htmlFiles.map(file => {
//       return `<button onclick="location.href='/games/${file}'">${file}</button>`
//     }).join('<br><br>');

//     const pageHtml = `
//       <html>
//         <head>
//           <title>Games</title>
//         </head>
//         <body>
//           <h1>Available Games</h1>
//           ${buttonsHtml}
//         </body>
//       </html>
//     `;

//     res.send(pageHtml);
//   });
// });

// global error handler
// put it at the last of all route handlers
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