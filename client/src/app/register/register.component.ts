import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styles: [`.head {
    font-size: 30px;
    font-weight: bold;
    text-align: center;
    color: #2BBBAD;
  }

  form {
    text-align: center;
  }

  button {
    margin: 0 50px;
  }

  .card {
    height: auto;
    width: 500px;
    border-radius: 15px;
    margin: 100px auto;
    padding: 30px;
  }

  `]
})
export class RegisterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
