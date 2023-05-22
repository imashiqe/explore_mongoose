import User from "./user.model";

 export const createUserToDB=async()=> {
    const user = await new User({
   id: '8689',
 role:"student",
 password: 'jiofahikjkm014454',
 name: {
    firstName: 'ashplat Xam',
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
return user

};
