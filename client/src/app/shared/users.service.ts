import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { User } from './user.model';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  selectedUsers!: User;
  users!: User[];
  readonly baseUrl = 'http://localhost:3000/users';

  constructor(private http: HttpClient) {}

  signUp(user: User) {
    return this.http.post(this.baseUrl + '/register', user);
  }

  login(user: User) {
    return this.http.post<{success: boolean, userExist: boolean}>(this.baseUrl + '/auth', user);
  }
}
