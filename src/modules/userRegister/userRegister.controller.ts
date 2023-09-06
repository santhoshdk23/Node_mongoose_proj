import { Request, Response } from 'express';
import {createUser1,updateUser1,deleteUser1, getUser1, loginUser1} from '../userRegister/userRegister.service';
// res.json({message:"success",users})

export async function getUser(req:Request,res:Response){
  try{
    const newUser = await getUser1();

    res.status(201).json(newUser);
  }catch (error:any) {
    console.error(error);
    res.status(400).json({ message: error.message });
  }
}

export async function createUser(req: Request, res: Response) {
  try {
    const { username, password,email,roles } = req.body;

    const newUser = await createUser1(username, password,email,roles);

    res.status(201).json(newUser);
  } catch (error:any) {
    console.error(error);
    res.status(400).json({ message: error.message });
  }
}

export async function loginUser(req: Request, res: Response): Promise<void> {
  const { username, password } = req.body;

  const token = await loginUser1(username, password);

  if (token) {
    res.json({ token ,message:'Login Success'});
  } else {
    res.status(401).json({ message: 'Login failed' });
  }
}

export async function updateUser(req: Request, res: Response) {
  try {
    const userId = req.params.id;
    const newUserData = req.body;

    const updatedUser = await updateUser1(userId, newUserData);

    res.status(200).json({updatedUser,message:"User Updated"});
  } catch (error) {
    console.error(error);
    res.status(400).json({ message: 'User update failed' });
  }
}

export async function deleteUser(req: Request, res: Response) {
  try {
    const userId = req.params.id;

    const deletedUser = await deleteUser1(userId);

    res.status(200).json({ message: 'User deleted' });
  } catch (error) {
    console.error(error);
    res.status(400).json({ message: 'User deletion failed' });
  }
}
