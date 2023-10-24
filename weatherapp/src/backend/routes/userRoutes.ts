// Sisältää api reitit käyttäjien hallintaan
import { Router } from "express";
import { getAllUsers, postNewUser, updateUser, deleteUser, login, getUserById, getLoggedInUser   } from "../controllers/userController";
import tokenAuthenticate from "../middleware/jwAuth";

const router = Router()

// Endpoints /api/users
router.get("/", tokenAuthenticate, getAllUsers)
router.get("/me", tokenAuthenticate, getLoggedInUser )
router.get("/:id", getUserById)

router.post("/", postNewUser)
router.post("/login", login)

router.put("/:id", updateUser)

router.delete("/:id", deleteUser)

export default router