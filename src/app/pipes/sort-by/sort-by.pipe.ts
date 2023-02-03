import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sortBy'
})
export class SortByPipe implements PipeTransform {

  transform(value: string[], isAscending: boolean = true): string[] {
    if (value == null || value === undefined) {
      return value;
    }

    if (!Array.isArray(value)) {
      throw new Error('Sort by peipe required an array');
    }
    return value.sort((a, b) => {
      const v1 = a.toUpperCase();
      const v2 = b.toUpperCase();

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
