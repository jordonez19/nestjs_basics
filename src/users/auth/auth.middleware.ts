import { HttpException, HttpStatus, Injectable, NestMiddleware } from '@nestjs/common';

@Injectable()
export class AuthMiddleware implements NestMiddleware {
  use(req: any, res: any, next: () => void) {
/* 
    const { authorization } = req.headers

    if (!authorization) {
      //return res.status(401).json({ message: 'Unauthorized' });
      throw new HttpException('unauthorized', HttpStatus.UNAUTHORIZED)
    }
    
    if (authorization !== 'aaa'){
      //return res.status(403).json({ message: 'Forbidden' });
      throw new HttpException('forbiden', HttpStatus.FORBIDDEN)
    }
 */
    next();
  }
}
