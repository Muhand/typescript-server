import * as path from 'path';
import * as express from 'express';
import * as bodyParser from 'body-parser';
import { Route } from './helpers/Route';
import { Routes, routers } from './controllers/index';
import * as home from './controllers/home';

// Creates and configures an ExpressJS web server.
class App {

  // ref to Express instance
  public express: express.Application;

  //Run configuration methods on the Express instance.
  constructor() {
    this.express = express();
    this.middleware();
    this.routes();
  }

  // Configure Express middleware.
  private middleware(): void {
    this.express.use(bodyParser.json());
    this.express.use(bodyParser.urlencoded({ extended: false }));
  }

  // Configure API endpoints.
  private routes(): void {
    let routes = new Routes(this.express);
  }
}

export default new App().express;
