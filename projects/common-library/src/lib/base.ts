export class Base {

  static TOAST_OK: number = 1;
  static TOAST_WARNING: number = 2;
  static TOAST_ERROR: number = 3;
  static TOAST_INFO: number = 4;
  static TOAST_DURATION_DEFAULT: number = 4000;
  static TOAST_LOADING: number = 5;
  static TOAST_EVENT:string = 'showToast';

  static HIDE_LOADING:string = 'hideMainLoading';
  static SHOW_LOADING:string = 'showMainLoading';

  static NOTI_EVENT:string = "showNotification";
  static NOTI_DURATION_DEFAULT: number = 6000;
  static NOTI_OK: number = 6;
  static NOTI_WARNING: number = 7;
  static NOTI_ERROR: number = 8;
  static NOTI_INFO: number = 9;
  static NOTI_OK_DEFAULT: string = 'Thành công';
  static NOTI_WARNING_DEFAULT: string = 'Cảnh báo';
  static NOTI_ERROR_DEFAULT: string = 'Lỗi';
  static NOTI_INFO_DEFAULT: string = 'Thông báo';


  public static showLoading(){
    const event = new CustomEvent(Base.SHOW_LOADING, {bubbles: true});
    window.dispatchEvent(event);
  }

  public static hideLoading(){
    const event = new CustomEvent(Base.HIDE_LOADING, {bubbles: true});
    window.dispatchEvent(event);
  }

  public static showToast(prop: string,type:number = Base.TOAST_INFO, duration:number = Base.TOAST_DURATION_DEFAULT) {

    if(type === Base.TOAST_ERROR)
      duration = duration*2;

    const event = new CustomEvent(Base.TOAST_EVENT, {bubbles: true,detail:{message:prop,mesageType:type,duration:duration}});
    window.dispatchEvent(event);
  }


  public static showNotification(prop: string,type:number = Base.NOTI_INFO, title:string=Base.NOTI_INFO_DEFAULT, duration:number = Base.NOTI_DURATION_DEFAULT) {
    if(type === Base.NOTI_ERROR)
      duration = duration*2;

    if(type == Base.NOTI_OK && !title)
      title = Base.NOTI_OK_DEFAULT;
    else if(type == Base.NOTI_WARNING && !title)
      title = Base.NOTI_WARNING_DEFAULT;
    else if(type == Base.NOTI_ERROR && !title)
      title = Base.NOTI_ERROR_DEFAULT;

    const event = new CustomEvent(Base.NOTI_EVENT, {bubbles: true,detail:{message:prop,mesageType:type,messageTitle:title,duration:duration}});
    window.dispatchEvent(event);
  }


  public static registerEvent(eventName:string,callback:EventListenerOrEventListenerObject){
    window.addEventListener(eventName,callback);
  }

  public static sendEvent(eventName:string,data:any){
    const event = new CustomEvent(eventName, {bubbles: true,detail:data});
    window.dispatchEvent(event);
  }

  public static removeEvent(eventName:string,callback:EventListenerOrEventListenerObject){
    window.removeEventListener(eventName,callback, false);
  }




}

