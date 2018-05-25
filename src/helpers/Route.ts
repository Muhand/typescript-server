import * as express from 'express'

export class Route {
    routehandler: (req: express.Request, res: express.Response, next: Function) => {}
    url: string
}