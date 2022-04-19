import { Component, OnInit } from '@angular/core';
import { SubMenuModel } from 'commonLibrary';

@Component({
  selector: 'root-menu',
  templateUrl: './root-menu.component.html',
  styleUrls: ['./root-menu.component.less'],
})
export class RootMenuComponent implements OnInit {
  constructor() {}

  menuConfig: SubMenuModel[] = [
    {
      title: 'Các trang chính',
      iconfont: true,
      icon: 'Home',
      childs: [
        { title: 'Trang chủ', icon: '/assets/lock.svg', routerLink: '/home' },
        {
          title: 'Trang đăng nhập',
          icon: '/assets/dashboard.png',
          routerLink: '/login',
        },
        {
          title: 'Trang listing 1',
          icon: '/assets/menu1.png',
          routerLink: '/home/listing1',
        },
        {
          title: 'Trang listing 2',
          icon: '/assets/female.png',
          routerLink: '/home/listing',
        },
        {
          title: 'Trang Submenu Dọc',
          icon: '/assets/tinder.svg',
          routerLink: '/home/submenu1',
        },
        {
          title: 'Trang Submenu Ngang',
          icon: '/assets/dock.png',
          routerLink: '/home/submenu2',
        },
        {
          title: 'Trang Settings',
          icon: '/assets/settings.svg',
          routerLink: '/home/settings',
        },
      ],
    },
    {
      title: 'Các trang mở rộng',
      iconfont: true,
      icon: 'NumberedListText',
      childs: [
        {
          title: 'Trang trắng',
          icon: '/assets/paper.png',
          routerLink: '/home/emptypage',
        },
        { title: 'Trang lỗi 404', icon: '/assets/error.png', routerLink: '/notfound' },
        {
          title: 'Trang lỗi 403',
          icon: '/assets/denied.png',
          routerLink: '/nopermission',
        },
        {
          title: 'Trang lỗi 500',
          icon: '/assets/unavailable.svg',
          routerLink: '/errorpage',
        },
      ],
    },
  ];

  ngOnInit(): void {}

  itemClick() {
    
  }
}
