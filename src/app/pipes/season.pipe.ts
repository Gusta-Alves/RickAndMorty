import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'season'
})
export class SeasonPipe implements PipeTransform {

  transform(value: string): string {
    const valueSplit: string[] = value.split('');
    const result = valueSplit[1] + valueSplit[2]
    return result;
  }

}
