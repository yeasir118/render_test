const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.static('public'));

// Your existing routes (if any)
app.get('/api/hello', (req, res) => {
  res.send('Hello from backend');
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
