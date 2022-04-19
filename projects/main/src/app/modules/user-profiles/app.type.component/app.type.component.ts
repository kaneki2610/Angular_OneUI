import { Component, OnInit } from "@angular/core";
import {
  AppTypeModel,
  ApplicationModel,
  GroupSelectModel,
  CreateAppTypeRequestModel,
} from "../../../model/apptype_model";
import { AppTypeService } from "../../../services/app.type.service";
import { VMessageService } from "@vnpt/oneui-ui/message";
import { VDrawerService } from "@vnpt/oneui-ui/drawer";
import { CreateComponent } from "../create.component/create.component";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: "app-appType",
  templateUrl: "./app.type.component.html",
  styleUrls: ["./app.type.componment.less"],
})
export class AppTypeComponent implements OnInit {
  title = "emptypage";
  listOfData: AppTypeModel[] = [];
  listApp: ApplicationModel[] = [];
  listOfSelectedValue: ApplicationModel[] = [];
  groupOptionList: GroupSelectModel[] = [];
  groupSelectedValue: GroupSelectModel;

  validateForm: FormGroup;

  selectedProvince = 'Hà Nội';
  selectedCity = 'Đống Đa';
  provinceData = ['Hà Nội', 'Hồ Chí Minh'];

  provinceChange(value: string): void {
    console.log(value);
  }

  constructor(
    private message: VMessageService,
    private appTypeService: AppTypeService,
    private drawerService: VDrawerService,
    private fb: FormBuilder
  ) {
    this.validateFormGroup();
  }

  ngOnInit() {
    this.getAllAppTypes();
    this.getListApp();
    this.initGroupSelectData();
  }

  getAllAppTypes() {
    this.appTypeService.getAppType().subscribe((data) => {
      if (data.data.length !== null) {
        this.listOfData = data.data;
        console.log("app type list", data.data);
      } else {
        this.message.warning("Không có dữ liệu", { vDuration: 1000 });
      }
    });
  }

  getListApp() {
    this.appTypeService.getApplications().subscribe((data) => {
      if (data.data.length !== null) {
        this.listApp = data.data;
        console.log("application list", data.data);
      } else {
        this.message.warning("Không có dữ liệu", { vDuration: 1000 });
      }
    });
  }

  initGroupSelectData() {
    this.groupOptionList.push(new GroupSelectModel("GroupA", "A"));
    this.groupOptionList.push(new GroupSelectModel("GroupB", "B"));
    this.groupOptionList.push(new GroupSelectModel("GroupC", "C"));
    this.groupOptionList.push(new GroupSelectModel("GroupD", "D"));
    this.groupSelectedValue = this.groupOptionList[0];
  }

  validateFormGroup() {
    this.validateForm = this.fb.group({
      id: ["", [Validators.required]],
      name: ["", [Validators.required]],
      description: ["", []],
      groupSelect: [],
      listAppSelect: [],
    });
  }

  submitForm(): void {
    for (const i in this.validateForm.controls) {
      this.validateForm.controls[i].markAsDirty();
      this.validateForm.controls[i].updateValueAndValidity();
    }
    if (this.validateForm.status == "VALID") {
      var listApplication: ApplicationModel[] = [];
      if (this.validateForm.value.listAppSelect.length > 0) {
        for (
          var i: number = 0;
          i < this.validateForm.value.listAppSelect.length;
          i++
        ) {
          for (var j: number = 0; j < this.listApp.length; j++) {
            if (
              this.validateForm.value.listAppSelect[i] == this.listApp[j].id
            ) {
              listApplication.push(this.listApp[j]);
            }
          }
        }
      }
      let payload = new CreateAppTypeRequestModel(
        this.validateForm.value.name,
        this.validateForm.value.groupSelect.value,
        this.validateForm.value.id,
        listApplication,
        this.validateForm.value.description
      );
      console.log(payload);
      this.appTypeService.postComment(payload).subscribe((data) => {
        this.message.success("Thêm mới thành công", { vDuration: 1000 });
        this.validateForm.reset();
        this.getAllAppTypes();
      });
    }
  }

  groupSelectChange(value: object): void {
    console.log(value);
  }

  listAppSelectChange(value: ApplicationModel): void {
    console.log(value);
  }

  submitData() {}

  addAppType(event: MouseEvent) {
    this.drawerService.create<CreateComponent, { value: string }, string>({
      vContent: CreateComponent,
      vWidth: 600,
      vMaskStyle: { opacity: 0.2, animation: "none" },
    });
  }

  onCurrentPageDataChange(
    listOfCurrentPageData: ReadonlyArray<AppTypeModel>
  ): void {}
}
