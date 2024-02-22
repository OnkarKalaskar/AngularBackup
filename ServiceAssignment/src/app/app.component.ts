import { Component } from '@angular/core';
import { OperationsService } from './operations.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers : [OperationsService]
})
export class AppComponent {
  title = 'ServiceAssignment';
}
