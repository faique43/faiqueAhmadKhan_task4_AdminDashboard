import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { UsersService } from '../shared/users.service';
import { User } from '../shared/user.model';

declare var M: any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  constructor(public usersService: UsersService, private router: Router) {}

  ngOnInit() {
    this.resetForm();
  }

  resetForm(form?: NgForm) {
    if (form) form.reset();
    this.usersService.selectedUsers = {
      _id: '',
      name: '',
      username: '',
      password: '',
    };
  }

  onSubmit(form: NgForm) {
    this.usersService.login(form.value).subscribe((res) => {
      if (res.success) {
        this.router.navigateByUrl('homepage');
      } else if (!res.success && res.userExist) {
        M.toast({
          html: 'Incorrect Password',
          classes: 'rounded',
          displayLength: 1000,
        });
      } else if (!res.success && !res.userExist) {
        M.toast({
          html: 'Incorrect Username',
          classes: 'rounded',
          displayLength: 1000,
        });
      }
    });
  }
}
