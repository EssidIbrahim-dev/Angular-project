import { AuthenticationService } from './services/authentication.service';
import { Component, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { NgbSlideEvent, NgbSlideEventSource } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'E-commerce';

  returnUrl: string="/login";
  isLogin:boolean;

  constructor(private authenticationService:AuthenticationService,private router: Router){
  }
  ngOnChanges(changes: SimpleChanges): void {
    if(this.authenticationService.currentUserValue)
    this.isLogin=true;
    else
    this.isLogin=false;
    console.log(changes);
  }
  ngOnInit(): void {
    if(this.authenticationService.currentUserValue)
    this.isLogin=true;
    else
    this.isLogin=false;
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
