const express = require('express');
const pool = require('./config/connectDb');

const app = express();
const port = process.env.PORT || 8080;

app.use(express.json());

app.post('/register', async (req,res) => {
  const { email } = req.body;
  try{
    const [rows] = await pool.query(
      `insert into user (email) values (?)`, [email]
    );
    if(rows.affectedRows < 1){
      return res.send('registration failure');
    }
  }catch(e){
    console.log(e);
    return res.send('server problem');
  }
  res.send('registration successful');
});

app.post('/login', async (req, res) => {
  const { email } = req.body;
  try{
    const [rows] = await pool.query(
      `select id from user where email = ?`, [email]
    );
    if(rows.length <= 0){
      return res.send('invalid');
    }
    return res.send({
      "id": rows[0].id
    });
  }catch(e){
    console.log(e);
    return res.send('server problem');
  }
});

app.get('/movies', async (req, res) => {
  const { title, cast, category } = req.query;
  
  const params = { title, cast, category };
  const providedParams =  Object.entries(params).filter(([_, value]) => value);

  if(providedParams.length > 1){
    return res.send('only one search item');
  }

  try{
    let rows;

    if(providedParams.length === 0){
      [rows] = await pool.query(
        `select * from movie`
      )
    }else{
      const [key, value] = providedParams[0];
      console.log(key, value);
      if(key === 'cast'){
        [rows] = await pool.query(
          `select * from movie where JSON_SEARCH(cast, 'all', ?) is not null`,
          [`%${value}%`]
        );
      }else{
        [rows] = await pool.query(
          `select * from movie where ?? like ?`,
          [key, `%${value}%`]
        );
      }
    }
    return res.json(rows);
  }catch(e){
    return res.send('server problem');
  }
});

app.get('/', async (req,res) => {
  try{
    const [rows] = await pool.query(
      `select * from movie`
    );
    console.log(rows);
  }catch(e){
    console.log(e);
  }
  res.send('Testing Render. Made some changes. Are these visible on render?');
});

app.listen(port, () => {
  console.log(`server listening at port ${port}`);
});