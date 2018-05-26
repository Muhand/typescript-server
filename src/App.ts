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

    //#region Handle index routes
    let indexRouter = express.Router();
    indexRouter.get('/', (req, res, next) => {
      res.redirect('/home');
    });
    this.express.use('/', indexRouter);
    //#endregion
    
    //#region handle errors/statuscodes
    this.express.use(function (req, res, next) {
      res.status(404).send("404")
    })
    //#endregion
  }
}

export default new App().express;
