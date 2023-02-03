import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'flatten',
  pure: false
})
export class FlattenPipe implements PipeTransform {

  transform(values: any[]): any {
    return this.flatternArray(values);
  }

  private flatternArray(arr: any[]): any[] {
    const result = [];
    arr.forEach((value) => {
      if (Array.isArray(value)) {
        result.push(...this.flatternArray(value));
      } else {
        result.push(value);
      }
    });
    return result;
  }

}
