// import { Engine } from './engine';
// import { Wheels } from './wheels';

// export class Car{
//   engine: Engine;
//   wheels: Wheels;

//   constructor(){
//     this.engine = new Engine();
//     this.wheels = new Wheels();
//   }

//   startEngine(){
//     this.engine.start();
//   }
// }
import { Engine } from './engine';
import { Wheels } from './wheels';

export class Car{

  constructor(private engine: Engine,private wheels: Wheels){
  }

  startEngine(){
    this.engine.start();
  }
}