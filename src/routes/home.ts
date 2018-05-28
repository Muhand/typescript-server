import {Router, Request, Response, NextFunction} from 'express';
import { Route } from "../helpers/Route";

export class Home extends Route {
    constructor() {
        super()
        this.init();
        this.setupRoutes();
    }
    
    //#region conform to Route classs
    init() {
        this.router = Router()
    }

    setupRoutes() {
        this.router.get('/', this.root);
    }
    //#endregion

    public root(req: Request, res:Response, next: NextFunction) {
        res.json({message:"Welcome!"});
    }
}

const x = new Home();
module.exports = {
    router: x.router,
    init: () => {
        x.init();
    }
}