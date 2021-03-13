const express = require('express');
const cors = require('cors');

const dotenv = require('dotenv').config();

const notesRouter = require('./routes/notes');
require('../src/db/db');

const PORT = process.env.PORT || 8088;
const app = express();

app.use(express.json());
app.use(cors());

app.use(notesRouter);

app.listen(PORT, () => {
  console.log(`Server is up on PORT ${PORT}`);
});
