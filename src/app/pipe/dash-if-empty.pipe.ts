import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dashIfEmpty'
})
export class DashIfEmptyPipe implements PipeTransform {

  transform(value: any): string {
    const IF_EMPTY = value === null || value === undefined || value === '';
    
    if(IF_EMPTY){
      return '-';
    }
    
    return value;
  }

}
