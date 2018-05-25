import * as path from 'path';
import * as express from 'express';
import * as bodyParser from 'body-parser';
import { Route } from './helpers/Route';
import { IndexRoute } from './controllers/index';
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
    let routers: Array<Route> = [new IndexRoute]
    
    routers.forEach(route => {
      // this.express.use(route.url, (req: express.Request, res: express.Response, next: () => void) => {
      this.express.use(route.url, home => {
        console.log(route.url);
        // next();
      })
      
    });     // End of routes loop
  } // End of setting up routes

}

export default new App().express;
