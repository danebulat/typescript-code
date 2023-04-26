import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import jsonwebtoken from 'jsonwebtoken';
import routes from './src/routes/crmRoutes';
import process from 'process';

const app = express();
const PORT = 3000;

async function main() {

  // MONGODB --------------------
 
  // mongoose connection
  mongoose.Promise = global.Promise;

  await mongoose.connect('mongodb://127.0.0.1:27017/CRMdb', {
    useNewUrlParser: true,
    useUnifiedTopology: true
  });

  // EXPRESS --------------------
 
  // body-parser setup
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(bodyParser.json());

  // JWT setup (add decoded user to request object)
  app.use((req, res, next) => {
    if (req.headers &&
        req.headers.authorization &&
        req.headers.authorization.split(' ')[0] === 'JWT') {
      jsonwebtoken.verify(req.headers.authorization.split(' ')[1], `${process.env.JWT_KEY}`, 
        // callback with decoded user
        (err, decode) => {
          if (err) { req.user = undefined; }
          req.user = decode;
          next();
        });
    } else {
      // user undefined
      req.user = undefined;
      next();
    }
  });

  // serving static files 
  app.use(express.static('public'));
  
  // setup routes
  routes(app);
  
  app.get('/', (req, res) => {
    res.send(`Node and express server is running on port ${PORT}`);
  });
  
  app.listen(PORT, () => {
    console.log(`Your server is running on port ${PORT}`);
  });
}

main().catch(err => console.log(err));
