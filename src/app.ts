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


    //creating an  interface
    interface IUser{
      id: string;
      role:"student";
      password: string;
      name: {
         firstName: string,
         middleName: string,
         lastName: string,

      };
      dateOfBirth?: string;
      gender: "male" | "female";
      email?: String;
      contactNo: string;
      emergencyContact: string;
      presentAddress: string;
      permanentAddress: string;

    }

      //creating  schema using  interface
  const userSchema = new Schema<IUser>({
    id: { type: String,
    required: true ,
    unique: true,
      },
   role: {
       type: String,
       required: true,
    },
    password:{
       type: String,
       required: true,

    },
    name: {
       firstName:{
        type:String,
        required: true,
       },
       middleName:{
         type: String
       },
       lastName: {
         type: String,
         required: true,
       }
    },
    dateOfBirth: {
      type: String
     
    },
    gender: {
      type: String,
      enum : ['male', 'female']
    },
    email: {
       type: String,
       required: true,
    },
    contactNo: {
      type:String,
      required: true,
    },
    // emergencyContact: {
    //    type: Number,
    //    required: true,
    // },
    presentAddress: {
       type: String,
       required: true,
    },
    permanentAddress: {
       type: String,
       required: true,
    }
   // name: { type: String, required: true },
   // email: { type: String, required: true },
    // avatar: String
  });


// model
const User = model<IUser>("User" , userSchema);

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