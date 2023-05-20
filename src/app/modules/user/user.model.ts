import { Schema, model } from "mongoose";
import { IUser } from "./user.interface";

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