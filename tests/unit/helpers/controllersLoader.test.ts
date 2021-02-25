import controllersLoader from "../../../src/helpers/controllersLoader";

describe('#ControllerLoader', () => {

  jest.mock(controllersLoader.name, () => jest.fn(() => []));

  test('should return an array when called', () => {
    const result = controllersLoader();

    expect(result).toEqual([]);
  });

});
