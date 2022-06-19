const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const userController = require('./src/controller/user.controller');

app.use(express.json());
app.use(bodyParser.json());
app.use(cors());


app.post('/register', userController.Register);
// app.post('/login', userController.Login);


app.listen(3000, () => {
    console.log('Server started on port 3000');
});