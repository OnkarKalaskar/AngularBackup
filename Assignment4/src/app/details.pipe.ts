import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'details'
})
export class DetailsPipe implements PipeTransform {

  transform(value: any): string {
    return value.fname +" "+value.lname+" "+value.age+" "+value.city+" "+value.salary;
  }

}
