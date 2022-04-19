import { Component } from '@angular/core';
import { ActivatedRoute, NavigationEnd, NavigationStart, Router } from '@angular/router';
import { Base, Utilities } from 'commonLibrary';
export interface IBreadCrumb {
  label: string;
  url: string;
}

@Component({
  selector: 'breadcrumb-app',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.less']
})
export class BreadcrumbComponent {
  title = 'breadcrumb';
  private breadDict = new Map([
    ['home', 'Trang chủ'],
    ['admin', 'Quản lý'],
    ['administrator', 'Quản lý'],
    ['tickets', 'Yêu cầu'],
    ['requests', 'Yêu cầu'],
    ['users', 'Người dùng'],
    ['role', 'Phân quyền'],
    ['api-manage', 'API'],
    ['new', 'Tạo mới'],
    ['create', 'Tạo mới'],
    ['detail', 'Chi tiết'],
    ['update', 'Cập nhật'],
    ['org', 'Tổ chức'],
    ['regions', 'Khu vực'],
    ['clusters', 'Cụm Cluster'],
    ['services-type', 'Loại Dịch vụ'],
    ['services', 'Dịch vụ'],
    ['edit', 'Cập nhật'],
    ['notifications', 'Thông báo'],
    ['activities', 'Hoạt động'],
    ['list', 'Danh sách'],
    ['apps', 'Kho dịch vụ'],
    ['page', 'Trang'],
  ]);

  public breadcrumbs: IBreadCrumb[];
  constructor(private router: Router, private activatedRoute: ActivatedRoute) {
    this.router.events.subscribe((data) => {
      if (data instanceof NavigationStart) {
        Base.showLoading();
      } else if (data instanceof NavigationEnd) {
        if (
          data.url.toLowerCase() == '/home' ||
          data.url.toLowerCase() == '' ||
          data.url.toLowerCase() == '/'
        ) {
          if (this.breadcrumbs) {
            this.breadcrumbs.length = 0;
            this.breadcrumbs = [];
          }
        } else {
          this.buidBread2(data.url);
        }
        setTimeout(() => {
          Base.hideLoading();
        }, 100);
      }
    });
  }

  buidBread2(path: string) {
    const arr = path.split('/');
    if (this.breadcrumbs) {
      this.breadcrumbs.length = 0;
    }
    this.breadcrumbs = [];
    let rootUrl = '';
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] && arr[i].trim() !== '' && arr[i].trim() !== 'home') {
        //build label;
        let label = this.breadDict.get(arr[i].trim());
        if (!label) {
          label = Utilities.upperURI(arr[i].trim());
        }

        //build link;
        rootUrl = rootUrl + '/' + arr[i] + '';
        let link = rootUrl + '';

        //add to bread
        if (arr[i].trim() !== 'detail') {
          if (arr[i].trim() !== 'update' && arr[i].trim() !== 'page') {
            let newBread: IBreadCrumb = { label: label, url: link };
            this.breadcrumbs.push(newBread);
          } else {
            let newBread: IBreadCrumb = { label: label, url: null };
            this.breadcrumbs.push(newBread);
          }
        }
      }
    }
  }
}
