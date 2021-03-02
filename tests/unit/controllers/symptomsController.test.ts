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

const bodyWithoutType = {
  description: 'Sentido dor no dedo mindinho do pé esquerdo',
  medicines: ['Omeprazol', 'Dorflex'],
  continue: true,
  startedAt: '2021-02-27T00:40:04.114Z',
  finishedAt: null
};

const bodyWithoutDescription = {
  type: 'DOR',
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

  test('should return `idSymptom` when create new symptom', async () => {
    const result = await controller.newSymptom(
      mockRequest({}, {...correctBody}),
      mockResponse()
    );

    expect(result.status).toHaveBeenCalledWith(201);

    const idSymptom = (result.json as any).idSymptom;
    expect(idSymptom).not.toBeNull();
  });

  test('should return `bad request` when try create new Symptom without `type`', async () => {
    const result = await controller.newSymptom(
      mockRequest({}, { ...bodyWithoutType }),
      mockResponse()
    );

    expect(result.status).toHaveBeenCalledWith(400);
    expect(result.json).toHaveBeenCalledWith({ message: "Type attribute is required" });
  });

  test('should return `bad request` when try create new Symptom without `description`', async () => {
    const result = await controller.newSymptom(
      mockRequest({}, { ...bodyWithoutDescription }),
      mockResponse()
    );

    expect(result.status).toHaveBeenCalledWith(400);
    expect(result.json).toHaveBeenCalledWith({ message: "Description attribute is required" });
  });
});
