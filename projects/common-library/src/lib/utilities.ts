export class Utilities {
  public static stringToFloat(val):number {
    let res:number = 0;
    if (typeof val == "string")
        res = parseFloat(parseFloat(val).toFixed(2));
    return res;
  }

  public static stringToInt(val):number {
      let res:number = 0;
      if (typeof val == "string") res = parseInt(val);
      return res;
  }

  /**
  *
  * chuyen tieng viet thanh khong dau
  *
  */

  public static convertToEnglish(str) {
    str = str.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, "a");
    str = str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, "e");
    str = str.replace(/ì|í|ị|ỉ|ĩ/g, "i");
    str = str.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, "o");
    str = str.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, "u");
    str = str.replace(/ỳ|ý|ỵ|ỷ|ỹ/g, "y");
    str = str.replace(/đ/g, "d");
    str = str.replace(/À|Á|Ạ|Ả|Ã|Â|Ầ|Ấ|Ậ|Ẩ|Ẫ|Ă|Ằ|Ắ|Ặ|Ẳ|Ẵ/g, "A");
    str = str.replace(/È|É|Ẹ|Ẻ|Ẽ|Ê|Ề|Ế|Ệ|Ể|Ễ/g, "E");
    str = str.replace(/Ì|Í|Ị|Ỉ|Ĩ/g, "I");
    str = str.replace(/Ò|Ó|Ọ|Ỏ|Õ|Ô|Ồ|Ố|Ộ|Ổ|Ỗ|Ơ|Ờ|Ớ|Ợ|Ở|Ỡ/g, "O");
    str = str.replace(/Ù|Ú|Ụ|Ủ|Ũ|Ư|Ừ|Ứ|Ự|Ử|Ữ/g, "U");
    str = str.replace(/Ỳ|Ý|Ỵ|Ỷ|Ỹ/g, "Y");
    str = str.replace(/Đ/g, "D");
    return str;
  }

  public static getStringBeetween(start: string, end: string, str: string): string {
    const regex = new RegExp(start + "(.*?)+.*?" + end);
    let res = null;
    str = str.replace(/\n/g, '');
    str = str.replace(/\t/g, '');
    str = str.replace(/\r/g, '');
    let m = regex.exec(str);
    if (m != null) {
      m.forEach((match, groupIndex) => {

        if (match.startsWith(start) && match.includes(end)) {
          res = match;
        }
      });
    }
    return res;
    }

    public static getTimeStamp(): number {
    let d = new Date();
    let n = Number(d.getTime() + (Math.random() * 100000).toFixed());
    // let n = d.getTime();
    return n;
  }

  public static timeSince(timeStamp):string {
    let now = new Date();
    let secondsPast:number = (now.getTime() - timeStamp) / 1000;
    if (secondsPast < 60) {
      return 'vừa tạo';
    }
    if (secondsPast < 3600) {
      let num = parseInt((secondsPast / 60)+'');
      return num + 'm trước';
    }
    if (secondsPast <= 86400) {
      return parseInt((secondsPast / 3600+'')) + 'h trước';
    }
    if (secondsPast > 86400) {
      let d = new Date(timeStamp);
      let day = d.getDate();
      let month = d.toDateString().match(/ [a-zA-Z]*/)[0].replace(" ", "");
      let year = d.getFullYear() == now.getFullYear() ? "" : " " + d.getFullYear();
      return day + " " + month + year;
    }
  }


  public static removeItem(index:number,array:any[]){
      array.splice(index, 1);
  }

  public static getTextByName(name:string){
    let arr:string[] = name.trim().split(" ");
    if(arr.length > 1){
      return arr[0].substr(0,1)+""+arr[1].substr(0,1);
    }else{
      return arr[0].substr(0,2);
    }
  }

  public static copyToClipboard(val: string){
    const selBox = document.createElement('textarea');
    selBox.style.position = 'fixed';
    selBox.style.left = '0';
    selBox.style.top = '0';
    selBox.style.opacity = '0';
    selBox.value = val;
    document.body.appendChild(selBox);
    selBox.focus();
    selBox.select();
    document.execCommand('copy');
    document.body.removeChild(selBox);
  }

  public static generatePassword() {
    var length = 8,
        charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*",
        retVal = "";
    for (var i = 0, n = charset.length; i < length; ++i) {
        retVal += charset.charAt(Math.floor(Math.random() * n));
    }
    return retVal;
  }

  public static upperFirstLetter(str:string) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  public static upperURI(str:string) {
    let arrLabel = str.trim().split("-");
    let label = ""
    for(let j=0;j<arrLabel.length;j++){
      if(j>0)
        label = label+" "+Utilities.upperFirstLetter(arrLabel[j]);
      else
        label = Utilities.upperFirstLetter(arrLabel[j]);
    }
    return label;
  }

}
