import * as express from 'express';

class Route {
    public api:express.Router;

    constructor(){
        this.api = express.Router()
    }
}

export default Route;
