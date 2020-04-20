import { Human } from './human';

export class Man extends Human{
  constructor( name: string ) {
    super ( name );
  }
  sayYourName() {
    return 'override ' + super.sayYourName ();
  }
}
