const express = require("express");
const app = express();
require('dotenv').config(); // npm install dotenv
const cors = require('cors');

app.use(express.json());
app.use(cors()); // add this — before routes: npm install cors

const apiCreate = require('./routes/apiCreate.js');
app.use('/api', apiCreate);
 

app.get("/", (req, res) => {
  res.send("Hello from Express.jsxx!");
});


// start server 
app.listen(process.env.PORT, () => {
  console.log(`🚀 Server running on http://localhost:${process.env.PORT}`);
});