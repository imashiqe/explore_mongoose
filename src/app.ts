import express, { Application } from 'express';
//const app = express();

import cors from 'cors';
const app: Application = express();

// Application  routes
import userRoutes from './app/modules/user/user.route'


//using cors
app.use(cors());

//parse  data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/v1/user", userRoutes );

export default app;







       //inserting  a test  data  into mongodb

     /*
     step1: Interface done
     step2: Schema  done
     step3: Model
     step4: Database Query
     */
     
    // res.send('Hello World!');
    // next();


    

      //creating  schema using  interface


 
  // 3. Create a Model.
  // const User = model<IUser>('IUser', userSchema);
  
  // run().catch(err => console.log(err));
  
  // async function run() 
  





  // Pattern MVC Model

  /*
   Interface
   Schema , Model -> 
   route 
   route funtion -> controller.ts
   databse query-> services
  */