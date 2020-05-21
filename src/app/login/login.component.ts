import { Component, OnInit } from '@angular/core';
import { UpdateService } from '../update.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username: string;
  password: string;
  message: any;

  constructor(private service: UpdateService,private router:Router) { }

  ngOnInit(): void {
  }
  doLogin() {
    let response = this.service.doLogin(this.username, this.password);
    response.subscribe(data => {
      console.log('DATA', data);
      this.router.navigate(["/viewStatements"]);
    });
  }
}
