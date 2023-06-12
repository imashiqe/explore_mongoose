

import { Model } from "mongoose";//creating an  interface
 export interface IUser{
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
    
   // Statics 
   interface UserModel extends Model<IUser> {
      myStaticMethod(): number;
    }

   // instance methods
   export interface IUserMethods {
   fullName(): string;
 }