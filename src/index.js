const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv').config();
require('../src/db/db');
const notesRouter = require('./routes/notes');

const PORT = process.env.PORT || 6000;
const app = express();

app.use(express.json());
app.use(cors());

app.use(notesRouter);

app.listen(PORT, () => { console.log(`Server is up on PORT ${PORT}`) });
