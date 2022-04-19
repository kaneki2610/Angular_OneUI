import { Component, Input, OnInit } from '@angular/core';
import { NotificationModel } from 'commonLibrary';

@Component({
  selector: 'app-notification-panel',
  templateUrl: './notification-panel.component.html',
  styleUrls: ['./notification-panel.component.css'],
})
export class NotificationPanelComponent implements OnInit {
  listNotificationConfig: NotificationModel[] = [
    {
      id: '1',
      title: 'Hạ tầng đô thị',
      detail:
        ' Người dân báo cột đèn bị hư lâu nay chưa xử lý Tại 42 phạm ngọc thach,Phường 6, Quận 3,TP.hồ chí minh',
      avartar: 'hinhanh1.png',
      active: true,
      created_at: '2004-03-04 02:03:04',
    },
    {
      id: '2',
      title: 'Hạ tầng đô thị 2',
      detail:
        ' Người dân báo cột đèn bị hư lâu nay chưa xử lý Tại 42 phạm ngọc thach,Phường 6, Quận 3,TP.hồ chí minh',
      avartar: 'hinhanh1.png',
      active: false,
      created_at: '2004-03-04 02:03:04',
    },
    {
      id: '3',
      title: 'Hạ tầng đô thị 3',
      detail:
        ' Người dân báo cột đèn bị hư lâu nay chưa xử lý Tại 42 phạm ngọc thach,Phường 6, Quận 3,TP.hồ chí minh',
      avartar: 'hinhanh1.png',
      active: false,
      created_at: '2004-03-04 02:03:04',
    },
    {
      id: '4',
      title: 'Hạ tầng đô thị 4',
      detail:
        ' Người dân báo cột đèn bị hư lâu nay chưa xử lý Tại 42 phạm ngọc thach,Phường 6, Quận 3,TP.hồ chí minh',
      avartar: 'hinhanh1.png',
      active: true,
      created_at: '2021-02-03 03:44:04',
    },
    {
      id: '5',
      title: 'Hạ tầng đô thị 5',
      detail:
        ' Người dân báo cột đèn bị hư lâu nay chưa xử lý Tại 42 phạm ngọc thach,Phường 6, Quận 3,TP.hồ chí minh',
      avartar: 'hinhanh1.png',
      active: true,
      created_at: '2021-05-21 17:44:04',
    },
    {
      id: '6',
      title: 'Hạ tầng đô thị 6',
      detail:
        ' Người dân báo cột đèn bị hư lâu nay chưa xử lý Tại 42 phạm ngọc thach,Phường 6, Quận 3,TP.hồ chí minh',
      avartar: 'hinhanh1.png',
      active: true,
      created_at: '2021-05-21 02:03:04',
    },
    {
      id: '7',
      title: 'Hạ tầng đô thị 7',
      detail:
        ' Người dân báo cột đèn bị hư lâu nay chưa xử lý Tại 42 phạm ngọc thach,Phường 6, Quận 3,TP.hồ chí minh',
      avartar: 'hinhanh1.png',
      active: true,
      created_at: '2021-05-20 02:03:04',
    },
    {
      id: '8',
      title: 'Hạ tầng đô thị 8',
      detail:
        ' Người dân báo cột đèn bị hư lâu nay chưa xử lý Tại 42 phạm ngọc thach,Phường 6, Quận 3,TP.hồ chí minh',
      avartar: 'hinhanh1.png',
      active: true,
      created_at: '2021-02-03 02:03:04',
    },
    {
      id: '9',
      title: 'Hạ tầng đô thị 9',
      detail:
        ' Người dân báo cột đèn bị hư lâu nay chưa xử lý Tại 42 phạm ngọc thach,Phường 6, Quận 3,TP.hồ chí minh',
      avartar: 'hinhanh1.png',
      active: true,
      created_at: '2004-03-04 02:03:04',
    },
    {
      id: '10',
      title: 'Hạ tầng đô thị 10',
      detail:
        ' Người dân báo cột đèn bị hư lâu nay chưa xử lý Tại 42 phạm ngọc thach,Phường 6, Quận 3,TP.hồ chí minh',
      avartar: 'hinhanh1.png',
      active: true,
      created_at: '2004-03-04 02:03:04',
    },
  ];
  constructor() {}
  ngOnInit() {}
  onSelectNotifi(itemNotification: NotificationModel) {
    itemNotification.active = true;
  }
}
