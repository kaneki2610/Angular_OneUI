import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { VDrawerPlacement } from '@vnpt/oneui-ui/drawer';
import { VMessageService } from '@vnpt/oneui-ui/message';
import { VNotificationService } from '@vnpt/oneui-ui/notification';
import { AuthService, Base } from 'commonLibrary';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less']
})
export class HeaderComponent {
  visibleNoti = false;
  visibleMobileSearch = false;
  visibleMobileSetting = false;

  showDrawerLeft: boolean = false;
  placementLeft: VDrawerPlacement = 'left';

  placementRight: VDrawerPlacement = 'right';
  showDrawerRight: boolean = false;
  rightPanelMode: number;

  loadingVisible: boolean = false;

  constructor(private authService:AuthService, private router:Router, private message: VMessageService,
    private notification: VNotificationService,){

    Base.registerEvent('hideRootMenu', (event: any) => {
      this.closeLeftMenu();
    });

    Base.registerEvent(Base.SHOW_LOADING, (event: any) => {
      this.showLoading();
    });

    Base.registerEvent(Base.HIDE_LOADING, (event: any) => {
      this.hideLoading();
    });

    Base.registerEvent(Base.TOAST_EVENT, (event: any) => {
      if (event.detail) {
        switch (event.detail.mesageType) {
          case Base.TOAST_OK:
            this.message.success(event.detail.message, {
              vDuration: event.detail.duration,
            });
            break;
          case Base.TOAST_WARNING:
            this.message.warning(event.detail.message, {
              vDuration: event.detail.duration,
            });
            break;
          case Base.TOAST_ERROR:
            this.message.error(event.detail.message, {
              vDuration: event.detail.duration,
            });
            break;
          case Base.TOAST_LOADING:
            this.message.loading(event.detail.message, {
              vDuration: event.detail.duration,
            });
            break;
          default:
            this.message.info(event.detail.message, {
              vDuration: event.detail.duration,
            });
            break;
        }
      }
    });

    Base.registerEvent(Base.NOTI_EVENT, (event: any) => {
      if (event.detail) {
        switch (event.detail.mesageType) {
          case Base.NOTI_OK:
            this.notification.create(
              'success',
              event.detail.messageTitle,
              event.detail.message,
              { vDuration: event.detail.duration, vPlacement: 'bottomRight' }
            );
            break;
          case Base.NOTI_WARNING:
            this.notification.create(
              'warning',
              event.detail.messageTitle,
              event.detail.message,
              { vDuration: event.detail.duration, vPlacement: 'bottomRight' }
            );
            break;
          case Base.NOTI_ERROR:
            this.notification.create(
              'error',
              event.detail.messageTitle,
              event.detail.message,
              { vDuration: event.detail.duration, vPlacement: 'bottomRight' }
            );
            break;
          default:
            this.notification.create(
              'info',
              event.detail.messageTitle,
              event.detail.message,
              { vDuration: event.detail.duration, vPlacement: 'bottomRight' }
            );
            break;
        }
      }
    });
  }

  openNoti(): void {
    this.visibleNoti = true;
  }

  closeNoti(): void {
    this.visibleNoti = false;
  }
  openMobileSearch(): void {
    this.visibleMobileSearch = ! this.visibleMobileSearch;
    this.visibleMobileSetting = false;
  }

  closeMobileAllMenu(): void {
    this.visibleMobileSearch = false;
    this.visibleMobileSetting = false;
  }

  openMobileSetting(): void {
    this.visibleMobileSetting = ! this.visibleMobileSetting;
    this.visibleMobileSearch = false;
  }

  counter(i: number) {
      return new Array(i);
  }

  openLeftMenu(): void {
    this.showDrawerLeft = true;
  }

  closeLeftMenu(): void {
    this.showDrawerLeft = false;
  }

  openRightMenu(): void {
    this.showDrawerRight = true;
  }

  closeRightMenu(): void {
    this.showDrawerRight = false;
  }

  showFeedbackPanel() {
    this.rightPanelMode = 3;
    this.openRightMenu();
  }

  showHelpPanel() {
    this.rightPanelMode = 2;
    this.openRightMenu();
  }

  showNotificationPanel() {
    this.rightPanelMode = 1;
    this.openRightMenu();
  }

  settingAcountClick() {
    setTimeout(() => {
      this.router.navigateByUrl('/profiles')
    }, 300);
  }


  logout(){
    this.authService.logout();
  }

  showLoading() {
    this.loadingVisible = true;
  }

  hideLoading() {
    this.loadingVisible = false;
  }
}
