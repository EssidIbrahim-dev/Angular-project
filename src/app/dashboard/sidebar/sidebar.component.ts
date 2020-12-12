import { Router } from '@angular/router';
import { AuthenticationService } from './../../services/authentication.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  returnUrl: string="/login";
  isLogin:boolean;

  constructor(private authenticationService:AuthenticationService,private router: Router){
  }
  ngOnInit(): void {
  }
  logout(){
    this.authenticationService.logout();
    if(this.authenticationService.currentUserValue)
    this.isLogin=true;
    else
    this.isLogin=false;
    this.router.navigate([this.returnUrl]);


  }
}
