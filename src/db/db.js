const mongoose = require('mongoose');
const dotenv = require('dotenv').config();

mongoose.connect(
  'mongodb+srv://swpril:admin@cluster0.rdh4u.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
  {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex: true
  }
);
