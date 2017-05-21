import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html'
})
export class AppComponent {
  greeting = "Welcome,";
  name = "Mike";
  menuHeading = "Options";
}
