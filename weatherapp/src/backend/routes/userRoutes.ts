// Sisältää api reitit käyttäjien hallintaan
import { Router } from "express";
import { getMessage, getAllUsers, postNewUser, updateUser, deleteUser, login  } from "../controllers/userController";
import tokenAuthenticate from "../middleware/jwAuth";

const router = Router()

// Endpoints /api/users
router.get("/", getAllUsers)
router.get("/viesti",getMessage)

router.post("/", postNewUser)
router.post("/login", login)

router.put("/:id", updateUser)

router.delete("/:id", deleteUser)

export default router