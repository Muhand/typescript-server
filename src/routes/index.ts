import * as express from 'express';
import * as controllersRouter from '../controllers/index';


class Router {
    // ref to router instance
    public router: express.Application;

    constructor(){
        this.router = express();
        this.setupRoutes();
    }

    /**
     * This method will set up all the routes
     */
    setupRoutes(){
        this.router.use('/', controllersRouter.default.Home.default)
        // this.router.use('/', controllersRouter.default.Home);
        // this.router.use('/', controllersRouter.Home());
    }
}

export default new Router().router
