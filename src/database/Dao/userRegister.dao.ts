import User, { IUser } from '../schema/userRegisterSchema';

export async function getUser():Promise<any>{
  return User.find()
}

export async function createUser(user: IUser): Promise<IUser> {
   return User.create(user);
}

export async function getUserByUsername(username: string): Promise<IUser | null> {
  try {
    const user = await User.findOne({ username }).exec();
    return user || null;
  } catch (error) {
    console.error('Error while finding user by username:', error);
    return null;
  }
}


export async function updateUser(userId: string, newUserData: IUser): Promise<IUser | null> {
  return User.findByIdAndUpdate(userId, newUserData, { new: true });
}

export async function deleteUser(userId: string): Promise<IUser | null> {
  return User.findByIdAndDelete(userId);
}
