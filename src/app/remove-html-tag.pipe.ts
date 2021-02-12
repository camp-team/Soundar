import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'removeHtmlTag'
})
export class RemoveHtmlTagPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
