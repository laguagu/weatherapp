// // Täällä määritellään mitä tapahtuu kun tietylle reitille tehdään HTTP pyyntö.
// // Käsittelee pyynnön ja tuottaa vastauksen
import { Request, Response } from "express";
import { userRepository } from "../database/connection";
import { User } from "../entity/User";

const getMessage = (req: Request, res: Response) => {
  return res.status(200).json({ message: "Toimii" });
};

const getAllUsers = async (req: Request, res: Response) => {
  const response = await userRepository.find();
  console.log("All users", response);
  console.log(response);
  return res.status(200).json({ users: response });
};

const postNewUser = async (req: Request, res: Response) => {
  const { username, password, balance, depth } = req.body;
  const user = User.create({
    username: username,
    password: password,
    balance: balance,
    depth: depth
  })

  await user.save()
  console.log("New user created!");
  
  return res.json(user)
};

export { getMessage, getAllUsers, postNewUser };
