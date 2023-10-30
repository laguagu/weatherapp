// // Täällä määritellään mitä tapahtuu kun tietylle reitille tehdään HTTP pyyntö.
// // Käsittelee pyynnön ja tuottaa vastauksen
import { Request, Response } from "express";
import { AppDataSource } from "../database/connection";
import { User } from "../database/User";

const jwt = require("jsonwebtoken");
const userRepository = AppDataSource.getRepository(User);

const getUserById = async (req: Request, res: Response) => {
  const userId = parseInt(req.params.id, 10);

  const user = await userRepository.findOneBy({
    id: userId,
  });

  return res.status(200).json(user);
};

const getAllUsers = async (req: Request, res: Response) => {
  const response = await userRepository.find();
  return res.status(200).json({ users: response });
};

const registerUser = async (req: Request, res: Response) => {
  const {username, password} = req.body
  const existingUser = await userRepository.findOne({
    where: { username: username },
  });
  if (existingUser) {
    return res.status(400).json({ error: "Username already exists" });
  }
  console.log(req.body);
  const user = await userRepository.create(req.body);
  userRepository.save(user);
  return res.status(201).json(user);
};

const deleteUser = async (req: Request, res: Response) => {
  const results = await userRepository.delete(req.params.id);
  return res.send(results);
};

async function updateUser(req: Request, res: Response) {
  const userId = parseInt(req.params.id, 10);

  const user = await userRepository.findOneBy({
    id: userId,
  });

  userRepository.merge(user, req.body);
  const results = await userRepository.save(user);
  return res.send(results);
}

const login = async (req: Request, res: Response) => {
  // Tarkisukset

  const user = await userRepository.findOne({
    where: { username: req.body.username },
  });

  if (!user) {
    return res.status(401).json({ error: "User not found" });
  }

  const password = req.body.password;
  const passwordValid = user.password === password ? true : false;

  if (!passwordValid) {
    return res.status(401).json({ error: "Invalid password" });
  }

  // Generoidaan JWT
  const token = jwt.sign({ id: user.id }, process.env.SECRET_KEY, {
    expiresIn: "1h",
  });
  console.log(token);

  return res.json({ token });
};

const getLoggedInUser = async (req: Request, res: Response) => {
  const userId = (req as any).user.id;

  const user = await userRepository.findOneBy({
    id: userId,
  });

  if (!user) {
    return res.status(404).json({ error: "User not found" });
  }

  return res.status(200).json(user);
};

export {
  getAllUsers,
  registerUser,
  deleteUser,
  updateUser,
  login,
  getUserById,
  getLoggedInUser,
};

