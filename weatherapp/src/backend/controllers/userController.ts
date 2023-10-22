// // Täällä määritellään mitä tapahtuu kun tietylle reitille tehdään HTTP pyyntö.
// // Käsittelee pyynnön ja tuottaa vastauksen
import { Request, Response } from "express";
import { AppDataSource } from "../database/connection";
import { User } from "../entity/User";

const userRepository = AppDataSource.getRepository(User);

const getMessage = (req: Request, res: Response) => {
  return res.status(200).json({ message: "Toimii" });
};

const getAllUsers = async (req: Request, res: Response) => {
  const response = await userRepository.find();
  return res.status(200).json({ users: response });
};

const postNewUser = async (req: Request, res: Response) => {
  const user = await userRepository.create(req.body);
  const result = await userRepository;
  // const { username, password, balance, depth } = req.body;
  // const user = User.create({
  //   username: username,
  //   password: password,
  //   balance: balance,
  //   depth: depth,
  // });

  // await user.save();
  // console.log("New user created!");

  return res.json(user);
};

const deleteUser = async (req: Request, res: Response) => {
  const results = await userRepository.delete(req.params.id);
  return res.send(results);
};

async function updateUser  (req: Request, res: Response) {
  const userId = parseInt(req.params.id, 10);

  const user = await userRepository.findOneBy({
    id: userId
  });

  userRepository.merge(user, req.body);
  const results = await userRepository.save(user)
  return res.send(results);
};

export { getMessage, getAllUsers, postNewUser, deleteUser, updateUser };
