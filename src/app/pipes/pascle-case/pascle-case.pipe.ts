import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pascleCase'
})
export class PascleCasePipe implements PipeTransform {

  transform(value: string): any {
    return value.replace(/\w+/g, (s) => s[0].toUpperCase() + s.slice(1).toLowerCase());
  }

}
