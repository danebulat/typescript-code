import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import routes from './src/routes/crmRoutes';

const app = express();
const PORT = 3000;

async function main() {

  // MONGODB --------------------
 
  // mongoose connection
  mongoose.Promise = global.Promise;

  await mongoose.connect('mongodb://127.0.0.1:27017/CRMdb', {
    useNewUrlParser: true
  });

  // EXPRESS --------------------
 
  // body-parser setup
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(bodyParser.json());

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
