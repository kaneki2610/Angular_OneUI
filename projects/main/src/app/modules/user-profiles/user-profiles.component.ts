import { Component, OnInit } from '@angular/core';
import { SubMenuModel } from 'commonLibrary';

@Component({
  selector: 'mainapp-user-profiles',
  templateUrl: './user-profiles.component.html',
  styleUrls: ['./user-profiles.component.less']
})
export class UserProfilesComponent implements OnInit {

  menuVisible: boolean = true;

  menuConfig: SubMenuModel[] = [
    {
      title: 'Thiết lập tài khoản',
      childs: [
        { title: 'Thông tin tài khoản', icon: '/assets/account.png', routerLink: '/profiles' },
        {
          title: 'Đăng nhập và bảo mật',
          icon: '/assets/password.png',
          routerLink: 'security',
        },
        {
          title: 'App Type',
          icon: '/assets/password.png',
          routerLink: 'appType',
        },
      ],
    },
    {
      title: 'Thông tin hệ thống',
      childs: [
        {
          title: 'Thuê bao',
          icon: '/assets/membership.png',
          routerLink: '/subscription',
        },
        { title: 'Lịch sử truy cập', icon: '/assets/time.png', routerLink: '/history' },
        {
          title: 'Lịch sử thanh toán',
          icon: '/assets/payment.png',
          routerLink: '/payments',
        },
      ],
    },
  ];

  tonggleMenu() {
    this.menuVisible = !this.menuVisible;
    setTimeout(() => {
      window.dispatchEvent(new Event('resize'));
    }, 200);
  }

  itemClick() {
    if (window.innerWidth <= 768) {
      this.menuVisible = true;
    }
  }

  constructor() { }

  ngOnInit(): void {
  }

}
