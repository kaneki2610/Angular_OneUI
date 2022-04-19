export interface SubMenuModel {
  title: string;
  icon?: string;
  iconfont?: boolean;
  href?: string;
  routerLink?: string;
  vRouterLink?: string;
  childs?: SubMenuModel[];
}
