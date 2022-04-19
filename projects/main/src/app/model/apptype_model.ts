export interface AppTypeModel {
  _id: string;
  created_at: number;
  description: string;
  id: string;
  group: string;
  listApp: AppTypeDetailModel[];
  name: string;
}

export interface AppTypeDetailModel {
  id: string;
  name: string;
  url: string;
}

export interface ResponseModel {
  code: string;
  data: AppTypeModel[];
  message: string;
}

export interface ApplicationModel {
  id: string;
  _id: string;
  name: string;
  local_url: string;
  app_url: string;
  logo: string;
}

export interface ResponseApplicationModel {
  code: string;
  data: ApplicationModel[];
  message: string;
}

export class CreateAppTypeRequestModel {
  name: string;
  description?: string;
  group: string;
  id: string;
  list_apps: ApplicationModel[];

  constructor(n: string, g: string, id: string, listApp?: ApplicationModel[], d?: string){
    this.name = n;
    this.description = d ?? "";
    this.group = g;
    this.id = id;
    this.list_apps = listApp ?? [];
  }
}

export class GroupSelectModel {
  label: string;
  value: string;

  constructor(l: string, v: string){
    this.label = l;
    this.value = v;
  }
}
