import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'myPipe'
})
export class MyPipePipe implements PipeTransform {

  transform(value: any): any {
    let ans = ""; 
    ans += "Welcome to cybage: "+value.name;
    
    ans += "\n Your id is: "+ value.id;
    
    ans += "\n Your city: "+value.city;
    
    ans += "\n your age: "+value.age;
    
    return ans;
  }
}
