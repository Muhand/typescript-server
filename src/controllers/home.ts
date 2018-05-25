// //Import modules
// import { Router } from 'express';

// class Home {
//     public api: Router;

//     constructor(){
//         this.api = Router();
//         this.home();
//     }

//     private home(){
//         // '/v1/'
//         this.api.get('/', (req, res)=>{
//             res.json({
//                 message: 'Welcome!'
//             });
//         });    
//     }
// }

// export default new Home().api

//Import modules
import { Router } from 'express';

//Export router
export default () => {
    console.log(`<dfasdf`);
    
  let api = Router();
  
  this.api.get('/', (req, res)=>{
      console.log(`GOOTTT`);
      
      res.json({
          message: 'Welcome!'
        });
    }); 

  return api;
}
