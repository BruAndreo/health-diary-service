import { Request, Response } from 'express';
import { Controller, Post } from '@overnightjs/core';

@Controller('symptoms')
class SymptonsController {

  @Post()
  public async newSymptom(req: Request, res: Response): Promise<Response> {
    try {
      if (!req.body.type || !req.body.description) {
        throw new Error(`${!req.body.type ? "Type" : "Description"} attribute is required`);
      }

      return res.status(201).json({ idSymptom: 1 });
    }
    catch (e) {
      return res.status(400).json({ message: e.message });
    }
  }

}

export default SymptonsController;
