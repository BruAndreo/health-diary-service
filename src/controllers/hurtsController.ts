import { Request, Response } from 'express';
import { Controller, Post } from '@overnightjs/core';

@Controller('hurts')
class HurtsControllers {

  @Post()
  public newHurt(req: Request, res: Response): Response {
    return res.json({ message: 'hello' });
  }

}

export default HurtsControllers;
