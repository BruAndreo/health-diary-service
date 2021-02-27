import HurtsControllers from "../../../src/controllers/hurtsController";
import mockRequest from '../mocks/request';
import mockResponse from '../mocks/response';

const correctBody = {
  type: 'DOR',
  description: 'Sentido dor no dedo mindinho do pé esquerdo',
  medicines: ['Omeprazol', 'Dorflex'],
  continue: true,
  startedAt: '2021-02-27T00:40:04.114Z',
  finishedAt: null
};

describe('#HurtsController', () => {
  let controller: HurtsControllers;

  beforeEach(() => {
    controller = new HurtsControllers();
  });

  test('should return `id` when create new hurt', async () => {
    const result = await controller.newHurt(
      mockRequest({}, {...correctBody}),
      mockResponse()
    );

    expect(result.status).toHaveBeenCalledWith(201);
    expect(result.json).toHaveBeenCalledWith({ idHurt: 1 });
  });
});
