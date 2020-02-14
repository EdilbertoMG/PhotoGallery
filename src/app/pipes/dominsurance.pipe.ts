import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dominsurance'
})
export class DominsurancePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
