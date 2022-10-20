import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormControl, FormGroup, Validators} from '@angular/forms';
import {Country} from '../country';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  registerFormGroup: FormGroup;
  countryList = [];
  notification: string;

  constructor() {
  }

  ngOnInit(): void {
    this.registerFormGroup = new FormGroup({
      name: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.email, Validators.required]),
      password: new FormGroup({
        passwordFirst: new FormControl('', [Validators.required, Validators.minLength(6)]),
        passwordSecond: new FormControl('')
      }, this.checkPassword),
      country: new FormControl(),
      age: new FormControl('', [Validators.required,
        Validators.min(18), Validators.max(90)]),
      gender: new FormControl(),
      phone: new FormControl('', [Validators.required,
        Validators.pattern('^\\+84\\d{9,10}$')])
    });
    this.countryList.push(new Country(1, 'Việt Nam'));
    this.countryList.push(new Country(2, 'Janpan'));
  }

  getVelue() {
    this.notification = 'Đăng nhập thành công';
    console.log(this.registerFormGroup.value);
  }

  checkPassword(abstractControl: AbstractControl): any {
    const password = abstractControl.value;
    return (password.passwordFirst === password.passwordSecond) ? null : {notSame: true};
  }
}
