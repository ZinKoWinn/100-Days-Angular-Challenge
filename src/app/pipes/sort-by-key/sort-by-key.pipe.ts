import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sortByKey'
})
export class SortByKeyPipe implements PipeTransform {

  transform(value: { [key: string]: string; }[], key: string, isAscending: boolean = true): any {
    if (value == null || value === undefined) {
      return value;
    }

    if (!Array.isArray(value)) {
      throw new Error('Sory by key pipe required an array');
    }

    const values = [...value];
    return values.sort((a, b) => {
      const v1 = a[key].toUpperCase();
      const v2 = b[key].toUpperCase();

      if (v1 < v2) {
        return isAscending ? -1 : 1;
      }

      if (v1 > v2) {
        return !isAscending ? -1 : 1;
      }
      return 0;
    });
  }

}
