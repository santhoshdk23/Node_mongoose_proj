import * as bcrypt from 'bcrypt';
import * as jwt from 'jsonwebtoken';
import { Request, Response, NextFunction } from 'express';

// Replace with a strong and secret key for JWT
const jwtSecretKey = '123467890';

export async function hashPassword(password: string): Promise<string> {
  const saltRounds = 10;
  return bcrypt.hash(password, saltRounds);
}

export async function comparePasswords(
  providedPassword: string,
  hashedPassword: string
): Promise<boolean> {
  return bcrypt.compare(providedPassword, hashedPassword);
}

export function generateJWT(user: any): string {
  return jwt.sign(user, jwtSecretKey, { expiresIn: '1h' }); // Token expires in 1 hour
}

export function requireAuth(req: Request, res: Response, next: NextFunction): void {
  const token = req.header('Authorization');

  if (!token) {
    res.status(401).json({ message: 'Unauthorized' });
    return;
  }

  jwt.verify(token, jwtSecretKey, (err: any, user: any) => {
    if (err) {
      res.status(401).json({ message: 'Unauthorized' });
      return;
    }
    // req.user = user;
    next();
  });
}
