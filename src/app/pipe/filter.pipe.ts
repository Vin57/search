import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
  pure: false,
})
export class FilterPipe implements PipeTransform {
  transform(elements: any[], search: string): any[] {
    return elements.filter((x) => x.toString().includes(search));
  }
}
