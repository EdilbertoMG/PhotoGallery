import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'nophoto'
})
export class NophotoPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
