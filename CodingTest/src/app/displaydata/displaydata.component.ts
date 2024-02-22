import { Component, Input } from '@angular/core';
import { Customer } from '../models/customer';
@Component({
  selector: 'app-displaydata',
  templateUrl: './displaydata.component.html',
  styleUrls: ['./displaydata.component.css']
})
export class DisplaydataComponent {
  
  @Input() customerArray : Customer[] = []


}
