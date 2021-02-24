import Application from "../../src/server/application";

describe('#Application', () => {
  let app: Application;

  beforeEach(() => {
    app = new Application();
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
});
