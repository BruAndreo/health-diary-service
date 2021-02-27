import { Request, Response } from 'express';
import HurtsControllers from "../../../src/controllers/hurtsController";

const correctBody = {
  type: 'DOR',
  description: 'Sentido dor no dedo mindinho do pé esquerdo',
  medicines: ['Omeprazol', 'Dorflex'],
  continue: true,
  startedAt: '2021-02-27T00:40:04.114Z',
  finishedAt: null
};

const mockRequest = {
  body: { ...correctBody }
} as any as Request;

const mockResponse = () => {
  const res = {} as any;
  res.status = jest.fn().mockReturnValue(res);
  res.json = jest.fn().mockReturnValue(res);
  return res;
};

describe('#HurtsController', () => {
  let controller: HurtsControllers;

  beforeEach(() => {
    controller = new HurtsControllers();
  });

  test('should return `id` when create new hurt', async () => {
    const result = await controller.newHurt(mockRequest, mockResponse());

    expect(result.status).toHaveBeenCalledWith(201);
    expect(result.json).toHaveBeenCalledWith({ idHurt: 1 });
  });
});
