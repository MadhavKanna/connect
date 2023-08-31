const express = require('express');
const mongoose = require('mongoose');
const { json } = require('body-parser');
const { apiRouter } = require('./routes/api');
const { User } = require('./models/user');
const dotenv = require('dotenv');
dotenv.config();
const app = express();
app.use(json());
app.use(apiRouter);

let testUser = {
  userId: 'abcdefgh',
  name: 'Madhav Kanna',
  email: 'madhavkanna3141@gmail.com',
  password: 'Password',
  data: {
    website: 'https://madhav-thenappan.web.app'
  }
}

mongoose.connect('mongodb+srv://' + process.env.userNameMongo + ':' + process.env.mongodbPass + '@cluster-connect.bdjokoc.mongodb.net/?retryWrites=true&w=majority',
).then(
  () => {
    console.log('Connected to database!');
  },
  err => {
    console.log('Connection failed!' + err);
  }
);


async function persistUser(userData) {
  if (await User.exists({ email: userData.email })) {
    // send message to client that user already exists
    console.log('User already exists!');
    return;
  }
  const user = new User(userData);

  await user.save().then(
    () => {
      console.log('User saved!');
    },
    err => {
      console.log('User not saved!' + err);
    }
  )
}

persistUser(testUser);

app.listen(3000, () => {
  console.log('Listening on port 3000');
});