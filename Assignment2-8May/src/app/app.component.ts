import { Component } from '@angular/core';
import { AngularServiceService } from './ServiceFolder/angular-service.service';  

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [AngularServiceService]
})
export class AppComponent {
  title = 'Assignment2-8May';

  constructor(private angularService : AngularServiceService){}
}
