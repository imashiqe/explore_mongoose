import express  from "express";
import { createUser } from "./user.controller";
import app from "../../../app";

const router = express.Router()

router.get('/', createUser);

export default router;