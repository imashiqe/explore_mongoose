import { IUser } from "./user.interface";
import User from "./user.model";

 export const createUserToDB=async(payload:IUser)
 : Promise<IUser>=> {
    const user =  new User(payload); // User -> class  user -> instance


await user.save(); // built in  instance methods custom instance methods 
// user.fullName()  // custom instance methods
console.log(user.fullName());
return user;
};



export const getUserFormDB= async()
: Promise<IUser[]> => {
    const users = await User.find();
    
    return users;
};


export  const getUserByIdFromDB= async(payload:string 
   ) : Promise<IUser | null> =>{
   const user = await User.findOne({id:payload},{name:1,contactNo:1});
   return user;
};

export  const getAdminUserByIdFromDB= async(payload:string 
   ) : Promise<IUser | null> =>{
   const user = new User()
   return user;
};


//class -> Attach -> Method -> Directly Call  using class
// user = new User
//user . instance methods
// User
