// Sisältää api reitit käyttäjien hallintaan
import { Router } from "express";
import { getMessage, getAllUsers, postNewUser, updateUser, deleteUser  } from "../controllers/userController";

const router = Router()

// Endpoints /api/users
router.get("/",getAllUsers)
router.get("/viesti",getMessage)
router.post("/", postNewUser)
router.put("/:id", updateUser)
router.delete("/:id", deleteUser)

export default router