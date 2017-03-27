// import {computedFrom} from 'aurelia-framework';

export class Home {
  heading = 'Dashboard 1.0';
  subtitle = 'dashboard'

  //Getters can't be directly observed, so they must be dirty checked.
  //However, if you tell Aurelia the dependencies, it no longer needs to dirty check the property.
  //To optimize by declaring the properties that this getter is computed from, uncomment the line below
  //as well as the corresponding import above.
  // @computedFrom('firstName', 'lastName')
  // get fullName() {
  //   return `${this.firstName} ${this.lastName}`;
  // }
}
