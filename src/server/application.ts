import { Server } from '@overnightjs/core';
import express from 'express';
import morgan from 'morgan';
import Config from '../config';
import controllersLoader from '../helpers/controllersLoader';

class Application extends Server {

  constructor() {
    super();
    this.middlewares();
    this.controllers();
  }

  private middlewares(): void {
    this.app.use(express.json());
    this.app.use(morgan('dev'));
  }

  private controllers(): void {
    super.addControllers(controllersLoader());
  }

  public start(): void {
    this.app.listen(Config.PORT, () => console.log(`Server online at port ${Config.PORT}`));
  }

}

export default Application;
