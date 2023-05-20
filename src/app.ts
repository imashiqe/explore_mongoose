import express, { Application ,NextFunction,Request,Response } from 'express';
//const app = express();
import cors from 'cors';
import { Schema, model ,} from 'mongoose';

const app: Application = express();
//using cors
app.use(cors());

//parse  data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));



app.get('/', (req: Request, res: Response , next: NextFunction) => {
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


const createUserToDB=async()=> {
         const user = new User({
        id: '778',
      role:"student",
      password: 'jiofahim',
      name: {
         firstName: 'Ashiqur X',
         middleName: 'Rahman',
         lastName: 'Fahim',

      },
    
      gender: "male" ,
      email: 'imashiqe@gmail.com',
      contactNo: '014578412',
      emergencyContact: '01457487451',
      presentAddress: 'lalbag dhaka',
      permanentAddress: 'ramgonj dhaka',

  });
   await user.save();
   console.log(user);
};
   createUserToDB();

 
  });


  
  // 3. Create a Model.
  // const User = model<IUser>('IUser', userSchema);
  
  // run().catch(err => console.log(err));
  
  // async function run() 
  



  export default app;

  // Pattern MVC Model

  /*
   Interface
   Schema , Model -> 
   route 
   route funtion -> controller.ts
   databse query-> services
  */