import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search',
})
export class SearchPipe implements PipeTransform {
  transform(values: any[], params: string[], searchTerm: string): any[] {
    if (
      this.isEmpty(searchTerm) ||
      this.isEmpty(params) ||
      this.isEmpty(values)
    ) {
      return values;
    }

    const lcSearchText = searchTerm.toLowerCase();
    return values.filter((value) => {
      for (const param of params) {
        const str = value[param];
        if (str && str.toLowerCase().indexOf(lcSearchText) !== -1) {
          return true;
        }
      }
      return false;
    });
  }

  /**
   * Checks if string or array is empty
   */
  private isEmpty(v: string | any[]) {
    return !v || v.length === 0;
  }
}
