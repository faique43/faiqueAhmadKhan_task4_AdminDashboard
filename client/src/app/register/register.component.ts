import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { UsersService } from '../shared/users.service';
import { User } from '../shared/user.model';

declare var M: any;

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  constructor(public usersService: UsersService) {}

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
    this.usersService.signUp(form.value).subscribe((res) => {
      this.resetForm();
      M.toast({
        html: 'User Registered',
        classes: 'rounded',
        displayLength: 1000,
      });
    });
  }
}
