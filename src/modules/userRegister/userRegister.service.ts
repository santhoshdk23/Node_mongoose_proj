import * as UserDao from '../../database/Dao/userRegister.dao';
import { IRole, IUser } from '../../database/schema/userRegisterSchema';
import * as AuthUtils from '../../utils/userAuth';


export async function getUser1() {
  return UserDao.getUser();
  
}

export async function createUser1(username: string, password: string,email: string,
  roles: IRole): Promise<IUser> {
    const hashedPassword = await AuthUtils.hashPassword(password);
  const newUser: any = {
    username,
    password:hashedPassword,
    email,
    roles

  };

  return UserDao.createUser(newUser);
}

export async function loginUser1(username: string, password: string): Promise<string | null> {
  const user = await UserDao.getUserByUsername(username);

  if (!user) {
    return null; // User not found
  }

  const passwordMatch = await AuthUtils.comparePasswords(password, user.password);

  if (!passwordMatch) {
    return null; // Incorrect password
  }

  const token = AuthUtils.generateJWT({ username: user.username, email: user.email });
  return token;
}

export async function updateUser1(userId: string, newUserData: IUser): Promise<IUser | null> {
  return UserDao.updateUser(userId, newUserData);
}

export async function deleteUser1(userId: string): Promise<IUser | null> {
  return UserDao.deleteUser(userId);
}

 
