import { Component } from '@angular/core';

@Component({
  selector: 'app-binding-ex',
  templateUrl: './binding-ex.component.html',
  styleUrls: ['./binding-ex.component.css']
})
export class BindingExComponent {

  isDisabled : boolean = true;
  item = "hide";
  imageUrl : string = 'src\app\binding-ex\h1.jpg';

  disable()
  {
    if(this.isDisabled)
    {
      this.isDisabled = false;
      this.item = "show";
    }
    else
    {
      this.isDisabled = true;
      this.item = "hide";
    }
  }

  public value : number = 100;
  public date : Date = new Date();

  public myShow() : void {
    alert("Alert after data binding");
  }

  
}
