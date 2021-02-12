import { Input, Pipe, PipeTransform } from '@angular/core';
import { Memo } from './interfaces/memo';

@Pipe({
  name: 'removeHtmlTags',
})
export class RemoveHtmlTagsPipe implements PipeTransform {
  @Input() memo: Memo;
  transform(memo: Memo, ...args: unknown[]): unknown {
    const striptags = require('striptags'); // striptagsをrequire()によって読み込む
    const originalText = memo.text;
    // console.log(originalText);
    return striptags(originalText, null, '\n'); // originalTextからhtmlのタグを削除、残したいタグはなし、第3引数で改行の設定
  }
}
