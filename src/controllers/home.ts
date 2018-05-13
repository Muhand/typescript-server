import Route from '../helpers/Route';
import IRoute from '../helpers/IRoute';

class Home extends Route implements IRoute {

    // private Path = {
    //     home: '/'
    // }
    Paths = {
        home:'/',
    }

    // Paths = {
    //     'home':'test'
    // }
    constructor(){
        super();
    }

    setup(){
        this.api.post(this.Paths.home, this.home);
    }

    private home(req, res){
    }
}

export default new Home().api
