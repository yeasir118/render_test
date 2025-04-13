const express = require('express');
const app = express();
const port = process.env.PORT || 8080;

app.get('/', (req,res) => {
  res.send('Testing Render');
});

app.listen(port, () => {
  console.log(`server listening at port ${port}`);
});