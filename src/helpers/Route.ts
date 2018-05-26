import * as express from 'express'
import {Router, Request, Response, NextFunction} from 'express';

export abstract class Route {
    private _router: Router    
    abstract init(): void
    abstract setupRoutes(): void

    //#region properties setters/getters
    get router(): Router {
        return this._router
    }
    set router(router:Router) {
        this._router = router
    }
    //#endregion
}