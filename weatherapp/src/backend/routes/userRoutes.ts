// Sisältää api reitit käyttäjien hallintaan
import { Router } from "express";
import { getMessage,getAllUsers } from "../controllers/userController";

const router = Router()

router.get("/",getAllUsers)
router.get("/viesti",getMessage)

export default router