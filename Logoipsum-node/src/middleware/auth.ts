import { Request, Response, NextFunction } from 'express';
import jwt, { JwtPayload } from 'jsonwebtoken';

interface AuthenticatedRequest extends Request {
  currentUser?: string;
}

const auth = (req: AuthenticatedRequest, res: Response, next: NextFunction): void => {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    res.status(401).json({ message: 'User is not authenticated' });
    return;
  }

  try {
    const token = authHeader.split(' ')[1];
    const payload = jwt.verify(token, process.env.JWT_SECRET as string) as JwtPayload;

    req.currentUser = payload.user as string;

    next();
  } catch (err) {
    console.error('Authentication error: ', err);
    res.status(401).json({ message: 'Invalid or expired token' });
    return;
  }
};

export default auth;
