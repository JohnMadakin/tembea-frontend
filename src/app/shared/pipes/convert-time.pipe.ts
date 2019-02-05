import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'convertTime'
})
export class ConvertTimePipe implements PipeTransform {

  transform(time: any): any {
    const engagementTimes = (time.split('-'));
    const transformedTime = engagementTimes.map(twentyFourHourTime => {
      let hour = (twentyFourHourTime.split(':'))[0]
      let min = (twentyFourHourTime.split(':'))[1]
      const part: String = hour > 12 ? 'PM' : 'AM';
      min = (min + '').length === 1 ? `0${min}` : min;
      hour = hour > 12 ? hour - 12 : hour;
      hour = (hour + '').length === 1 ? `0${hour}` : hour;
      return `${hour}:${min}${part}`
    });
    return transformedTime.join('<span class="text-in-value"> to </span>');
  }

}
