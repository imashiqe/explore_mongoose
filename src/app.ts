import express, { Application ,NextFunction,Request,Response } from 'express';
//const app = express();
import cors from 'cors';

const app: Application = express();
//using cors
app.use(cors());

//parse  data
app.use(express.json());
app.use(express.urlencoded)

app.get('/', (req: Request, res: Response , next: NextFunction) => {
     //inserting  a test  data  into mongodb

     /*
     step1: Interface
     step2: Schema
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

  })
  


  export default app;