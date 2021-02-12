import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'removeHtmlTags'
})
export class RemoveHtmlTagsPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
