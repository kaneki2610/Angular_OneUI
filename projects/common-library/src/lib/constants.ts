export class Constants {
  public static DEVICE_MOBILE: number = 1;
  public static DEVICE_TABLET: number = 2;
  public static DEVICE_DESKTOP: number = 3;

  static CACHE_ALL_API: string = 'list:api:all';
  static CACHE_ALL_GROUP: string = 'list:group:all';
  static CACHE_ALL_REGION: string = 'list:region:all';
  static CACHE_ALL_SERVICE_TYPE: string = 'list:service_type:all';
  static CACHE_USER_DETAIL: string = 'user:detail';
  static CACHE_TOKEN: string = 'user:token';
  static CACHE_FEATURED_APPS: string = 'list:featured:apps';
  static CACHE_NOTIFICATION_LIST: string = 'list:notifications';
  static CACHE_REQUESTS_LIST: string = 'list:cached-requests';
  static CACHE_REQUESTS_TTL: number = 600000; // in milisec, 600 000 ms = 10 minutes
}
