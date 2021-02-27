import { Request, Response } from 'express';
import { Controller, Post } from '@overnightjs/core';

@Controller('hurts')
class HurtsControllers {

  @Post()
  public async newHurt(req: Request, res: Response): Promise<Response> {
    return res.status(201).json({ idHurt: 1 });
  }

}

export default HurtsControllers;
