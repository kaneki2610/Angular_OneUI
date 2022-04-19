import { Pipe, PipeTransform } from '@angular/core';
@Pipe({ name: 'changeDateTime' })
export class ChangeDateTimePipe implements PipeTransform {
  transform(value: string): string {
    let reggie = /(\d{4})-(\d{2})-(\d{2}) (\d{2}):(\d{2}):(\d{2})/;
    let dateArray = reggie.exec(value);
    let dataObject = new Date(
      +dateArray[1],
      +dateArray[2] - 1,
      +dateArray[3],
      +dateArray[4],
      +dateArray[5],
      +dateArray[6]
    );
    let timenow = new Date();
    let date;
    let month;
    let hour;
    let minute;
    let second;
    if (dataObject.getFullYear() < timenow.getFullYear()) {
      return dataObject.toLocaleDateString();
    } else if (dataObject.getFullYear() == timenow.getFullYear()) {
      if (dataObject.getMonth() < timenow.getMonth()) {
        month = timenow.getMonth() - dataObject.getMonth();
        return month + ' ' + 'tháng trước';
      } else if (dataObject.getMonth() == timenow.getMonth()) {
        if (dataObject.getDate() < timenow.getDate()) {
          date = timenow.getDate() - dataObject.getDate();
          return date + ' ' + 'ngày trước';
        } else if (dataObject.getDate() == timenow.getDate()) {
          if (dataObject.getHours() < timenow.getHours()) {
            hour = timenow.getHours() - dataObject.getHours();
            return hour + ' ' + 'giờ trước';
          } else if (dataObject.getHours() == timenow.getHours()) {
            if (dataObject.getMinutes() < timenow.getMinutes()) {
              minute = timenow.getMinutes() - dataObject.getMinutes();
              return minute + ' ' + 'phút trước';
            } else if (dataObject.getMinutes() == timenow.getMinutes()) {
              if (dataObject.getSeconds() < timenow.getSeconds()) {
                second = timenow.getSeconds() - dataObject.getSeconds();
                return second + ' ' + 'giây trước';
              } else if (dataObject.getSeconds() == timenow.getSeconds()) {
                return 'less than a minute';
              }
            }
          }
        }
      }
    }
  }
}
