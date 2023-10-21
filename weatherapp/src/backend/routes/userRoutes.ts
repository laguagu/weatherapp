// Sisältää api reitit käyttäjien hallintaan
import { Router } from "express";
import { getMessage, getAllUsers, postNewUser  } from "../controllers/userController";

const router = Router()

router.get("/",getAllUsers)
router.get("/viesti",getMessage)
router.post("/", postNewUser)

export default router