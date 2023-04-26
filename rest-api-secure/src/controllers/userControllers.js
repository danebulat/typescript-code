import mongoose from 'mongoose';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { UserSchema } from '../models/userModel';
import process from 'process';

const User = mongoose.model('User', UserSchema);
 
// ------------------------------------------------------------ 
// Login Required Middleware
// ------------------------------------------------------------ 

// Execute next function if user logged in
export const loginRequired = (req, res, next) => {
  if (req.user) {
    next();
  } else {
    return res.status(401).json({ message: 'Unauthorized user!' });
  }
};

// ------------------------------------------------------------ 
// Register User
// ------------------------------------------------------------ 

export const register = (req, res) => {
  // instantiate new user and set hashed password
  const newUser = new User(req.body);
  newUser.hashPassword = bcrypt.hashSync(req.body.password, 10);

  // save user to database
  newUser.save()
    .then((user) => {
      // omit user password from response
      user.hashPassword = undefined;
      return res.json(user);
    })
    .catch((err) => {
      return res.status(400).send({
        message: err
      });
    });
};

// ------------------------------------------------------------ 
// Login User
// ------------------------------------------------------------ 

export const login = (req, res) => {
  User.findOne({ email: req.body.email})
    .then((user) => {
      // check if user found
      if (!user) {
        res.status(401).json({ message: 'Authentication failed. No user found' });
      }
      else if (user) {
        // make sure passwords match
        if (!user.comparePassword(req.body.password, user.hashPassword)) {
          res.status(401).json({ message: 'Authentication failed. Wrong password' });
        } else {
          // send JWT token back with secret word
          return res.json({token: 
            jwt.sign({ email: user.email, 
                       username: user.username, 
                       _id: user.id
                     }, `${process.env.JWT_KEY}`)});
        }
      }
    })
    .catch((err) => {
      throw err;
    });
};

