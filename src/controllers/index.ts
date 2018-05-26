import * as express from 'express';
import { Route } from '../helpers/Route';
import * as fs from 'fs';
import * as path from 'path';

const basename = path.basename(module.filename);

export class Routes {
    routers: Array<Route>
    private express: express.Application

    constructor(express?: express.Application) {
        this.routers = []
        if(express != null) {
            this.express = express;
            this.registerRoutes(this.express);
        } else {
            this.registerRoutes();
        }
    }

    private registerRoutes(express?: express.Application) {
        // Loop through every file in this folder ignoring index.ts
        fs
            .readdirSync(__dirname)
            .filter(file => (file.indexOf('.') !== 0) 
                            && (file !== basename) 
                            && ((file.slice(-3) === '.ts') 
                            || (file.slice(-3) === '.js')))
            .forEach(file => {
                
                const fileName = file.substr(0, file.length - 3);
                const temp = require(`./${fileName}`);

                // Forevery file push it to the array
                this.routers.push(temp);

                // After pushing it initialize the route
                temp.init();

                // After pushing the route, check if express is not null
                if (express != null) {
                    // If it is not null then register every route to that 
                    // express by using this.express.use(route.url, route.router)
                    express.use(`/${fileName}`, temp.router);
                }
            });
    }
}

const returnedObject = new Routes();
export function routers(): Array<Route> {
    return returnedObject.routers;
}