import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators
} from '@angular/forms';
import { VFormTooltipIcon } from '@vnpt/oneui-ui/form';

@Component({
  selector: 'create-view',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css'],
})
export class CreateComponent implements OnInit {
  pageTitle: string = 'Thêm mới app type';

  validateForm!: FormGroup;
  captchaTooltipIcon: VFormTooltipIcon = {
    type: 'Info',
    theme: 'twotone',
  };

  constructor(private fb: FormBuilder) {
    this.validateForm = this.fb.group({
      name: ['', [Validators.required]],
      // password: [null, [Validators.required]],
      // checkPassword: [null, [Validators.required, this.confirmationValidator]],
      // nickname: [null, [Validators.required]],
      // phoneNumberPrefix: ['+84'],
      // phoneNumber: [null, [Validators.required]],
      // website: [null, [Validators.required]],
      // captcha: [null, [Validators.required]],
      // agree: [false],
    });
  }

  submitForm(): void {
    console.log("aaaaa");
    for (const i in this.validateForm.controls) {
      this.validateForm.controls[i].markAsDirty();
      this.validateForm.controls[i].updateValueAndValidity();
    }
  }

  updateConfirmValidator(): void {
    /** wait for refresh value */
    Promise.resolve().then(() =>
      this.validateForm.controls.checkPassword.updateValueAndValidity()
    );
  }

  confirmationValidator = (control: FormControl): { [s: string]: boolean } => {
    if (!control.value) {
      return { required: true };
    } else if (control.value !== this.validateForm.controls.password.value) {
      return { confirm: true, error: true };
    }
    return {};
  };

  getCaptcha(e: MouseEvent): void {
    e.preventDefault();
  }

  ngOnInit() {}
}
