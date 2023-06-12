import { Schema, model , Model} from "mongoose";
import { IUser ,IUserMethods } from "./user.interface";

type UserModel = Model<IUser, {} , IUserMethods>;

const userSchema = new Schema<IUser, UserModel,IUserMethods>({
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

  userSchema.method('fullName', function fullName() {
    return this.name.firstName + ' ' + this.name.lastName;
  });
// model
const User = model<IUser,UserModel>("User" , userSchema);

export default User;

// instance  methods  -->  instance  er methods 
//  class  ->  instance  +  methods  -> instance methjods

