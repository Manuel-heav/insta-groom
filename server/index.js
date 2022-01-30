const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const messages = require('./api')
const app = express();

require('dotenv').config();

mongoose.connect(process.env.CONNECTION_URL, () => {
    console.log("connected")
})
app.use(bodyParser.json());
app.use(morgan('common'));
app.use(
    cors({
      origin: process.env.CORS_ORIGIN,
    }),
  );
  console.log(process.env.CORS_ORIGIN)
app.use(helmet());

const port = process.env.PORT || 1234;

app.get('/', (req,res) =>{
    res.json({
        message: "Hello world"
    })
})

app.use(express.static(path.join(__dirname, "/client/build")));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '/client/build', 'index.html'));
});

app.use('/api/message', messages);
app.listen(port, () =>{
    console.log(`Listening to localhost://${port}`);
});
