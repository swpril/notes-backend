const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv').config();
require('../src/db/db');

const PORT = process.env.PORT || 6000;
const app = express();

app.use(express.json());
app.use(cors());

app.listen(PORT, () => { console.log(`Server is up on PORT ${PORT}`) });
