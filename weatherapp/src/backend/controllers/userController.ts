// // Täällä määritellään mitä tapahtuu kun tietylle reitille tehdään HTTP pyyntö.
// // Käsittelee pyynnön ja tuottaa vastauksen
import { Request, Response } from 'express';
import { userRepository } from '../database/connection';


const getMessage = (req: Request, res: Response) => {
  return res.status(200).json({ message: "Toimii" });
};

const getAllUsers = async (req: Request, res: Response) => {
  const response = await userRepository.find()
  console.log("All users", response);
  console.log(response);
  return res.status(200).json({ users: response });
};


export { getMessage, getAllUsers};
