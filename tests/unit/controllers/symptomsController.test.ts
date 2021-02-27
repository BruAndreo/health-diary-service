import SymptonsController from "../../../src/controllers/symptomsController";
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

describe('#SymptomsController', () => {
  let controller: SymptonsController;

  beforeEach(() => {
    controller = new SymptonsController();
  });

  test('should return `id` when create new symptom', async () => {
    const result = await controller.newSymptom(
      mockRequest({}, {...correctBody}),
      mockResponse()
    );

    expect(result.status).toHaveBeenCalledWith(201);
    expect(result.json).toHaveBeenCalledWith({ idSymptom: 1 });
  });
});
