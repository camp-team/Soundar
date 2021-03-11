import { Pipe, PipeTransform } from '@angular/core';
const striptags = require('striptags');

@Pipe({
  name: 'removeHtmlTags',
})
export class RemoveHtmlTagsPipe implements PipeTransform {
  transform(body: string): any {
    return striptags(body); // originalTextからhtmlのタグを削除、残したいタグはなし、第3引数で改行の設定
  }
}
