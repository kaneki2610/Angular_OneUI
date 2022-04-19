import { Component, OnInit } from "@angular/core";
import { QuickMenuModel } from "commonLibrary";

@Component({
  selector: "mainapp-main",
  templateUrl: "./main.component.html",
  styleUrls: ["./main.component.less"],
})
export class MainComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  visibleSidebar = true;
  menuVisible: boolean = true;

  tonggleMenu() {
    this.menuVisible = !this.menuVisible;
    setTimeout(() => {
      window.dispatchEvent(new Event("resize"));
    }, 300);
  }

  itemClick() {
    if (window.innerWidth <= 768) {
      this.menuVisible = true;
    }
  }

  menuConfig: QuickMenuModel[] = [
    {
      routerLink: "/home",
      iconName: "/assets/dashboard.png",
      nameMenu: "Trang chủ",
    },
    {
      routerLink: "/profiles",
      iconName: "/assets/settings.svg",
      nameMenu: "Setting",
    },
    {
      routerLink: "/product",
      iconName: "/assets/settings.svg",
      nameMenu: "App Type",
    },
  ];
}
