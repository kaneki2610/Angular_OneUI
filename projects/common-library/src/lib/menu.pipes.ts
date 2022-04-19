import { Pipe, PipeTransform } from '@angular/core';
@Pipe({ name: 'activeUrlCheck' })
export class ActiveUrlCheckPipe implements PipeTransform {
  transform(rootvalue: string, value: string): boolean {
    if (rootvalue) {
      if (rootvalue.startsWith(value)) {
        if (value === '/home' && rootvalue != '/home') return false;
        return true;
      }
      return false;
    }
    return false;
  }
}
