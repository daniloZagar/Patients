import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'patients';
  allClicked = true;
  inactiveClicked = false;
  randomizedClicked = false;
  allPatients() {
    this.allClicked = true;
    this.inactiveClicked = false;
    this.randomizedClicked = false;
  }
  randomizedPatients() {
    this.allClicked = false;
    this.inactiveClicked = false;
    this.randomizedClicked = true;
  }
  inactivePatients() {
    this.allClicked = false;
    this.inactiveClicked = true;
    this.randomizedClicked = false;
  }
}
