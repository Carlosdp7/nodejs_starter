require('dotenv').config();
require('./config/mongoose');
const express = require('express');
const cors = require('cors');
const port = process.env.PORT || 8080;

const app = express();

app.use(cors());

app.use(express.json());

//Global routers
app.use(require('./routers/index'));

app.listen(port, () => {
  console.log(`Server is up on port ${port}`);
})