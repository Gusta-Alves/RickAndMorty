import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'episodeNumber'
})
export class EpisodeNumberPipe implements PipeTransform {

  transform(value: string): string {
    const newValue = value.split('/')[5];
    return newValue || '';
  }

}
