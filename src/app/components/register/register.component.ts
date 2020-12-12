import { ActivatedRoute, Router } from '@angular/router';
import { AuthenticationService } from './../../services/authentication.service';
import { User } from './../../model/user';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  Roles: any = ['Admin', 'Author', 'Reader'];
  user:User;
  returnUrl:string;

  constructor(private auth: AuthenticationService,private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.user=new User();
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';

  }
  register(){
    this.auth.register(this.user) .subscribe(
      data => {

          this.router.navigate([this.returnUrl]);
      },
      error => {
         console.log(error)
      });


  }

}
