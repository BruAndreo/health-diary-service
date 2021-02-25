import { Server } from "@overnightjs/core";
import controllersLoader from "../../../src/helpers/controllersLoader";
import Application from "../../../src/server/application";

describe('#Application', () => {
  let app: Application;

  jest.mock(controllersLoader.name, () => jest.fn(() => []));

  beforeEach(() => {
    app = new Application();
    jest.resetAllMocks();
  });

  test('should call listen server status when start method is called', () => {
    const listen = jest.spyOn(app.app, "listen");

    app.start();

    expect(listen).toHaveBeenCalled();
  });

  test('should call app.use when middleares are loadeds', () => {
    const use = jest.spyOn(app.app, "use");

    app["middlewares"]();

    expect(use).toHaveBeenCalled();
  });

  test('should call addControlers when method controllers are called', () => {
    const addControllers = jest.spyOn(Server.prototype, "addControllers");

    app['controllers']();

    expect(addControllers).toHaveBeenCalled();
  });
});
