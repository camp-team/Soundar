import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'removeHtmlTags',
})
export class RemoveHtmlTagsPipe implements PipeTransform {
  transform(body: string): any {
    const striptags = require('striptags');
    return striptags(body); // originalTextからhtmlのタグを削除、残したいタグはなし、第3引数で改行の設定
  }
}
