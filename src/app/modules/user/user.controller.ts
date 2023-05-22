import { NextFunction, Request, Response } from "express";
import { createUserToDB, getUserFormDB } from "./user.service";



//pattern 

// Route -> controller- > service 

export  const getUsers =async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
   const data = req.body;
   const user   = await createUserToDB(data);
   res.status(200).json({
      status:'success',
      data:user,
   });
};

export  const createUser = async (
   req: Request,
    res: Response ,
     next: NextFunction
     ) => {
    const user = await getUserFormDB()
    res.status(200).json({
       status:'success',
       data: user,
    });
};