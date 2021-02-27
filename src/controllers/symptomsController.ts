import { Request, Response } from 'express';
import { Controller, Post } from '@overnightjs/core';

@Controller('symptoms')
class SymptonsController {

  @Post()
  public async newSymptom(req: Request, res: Response): Promise<Response> {
    return res.status(201).json({ idSymptom: 1 });
  }

}

export default SymptonsController;
