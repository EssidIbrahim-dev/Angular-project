import { AuthenticationService } from './../../services/authentication.service';
import { Router, ActivatedRoute } from '@angular/router';
import { User } from './../../model/user';
import { UserService } from './../../services/user.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';


@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {
  user:User;
  formGroup: FormGroup;
  selectedLogin;
  //route;
  access_token:string;
  returnUrl: string;

  constructor(private authService:AuthenticationService,private router: Router,private route: ActivatedRoute) { }
  ngOnInit(): void {
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    this.user=new User();
    this.formGroup=new FormGroup({
      email:new FormControl('',[Validators.required]),
      password: new FormControl('',[Validators.required, Validators.minLength(8)]),

  })
  }

  initForm(){
    this.formGroup= new FormGroup({
      email: new FormControl('',[Validators.required]),
      password: new FormControl('',[Validators.required]),
    })
  }
 /* login(){

    if(this.formGroup.valid){
      this.authService.login(this.formGroup.controls['email'].value,this.formGroup.controls['password'].value).subscribe(result => {
        this.selectedLogin=result;

        if( this.selectedLogin.length===0){
          console.log("You are not sleected!");
        }
        else{
          console.log(this.selectedLogin);
          this.route="../dashboard";
        }
      });
    }
  }*/
  get email(){
    return this.formGroup.get('email')
  }
  get password() {
    return this.formGroup.get('password');
  }
  save(){
    if(this.formGroup.valid){

      this.user.email = this.formGroup.controls['email'].value;
      this.user.password = this.formGroup.controls['password'].value;
      this.authService.login(this.user).pipe(first())
      .subscribe(
          data => {
              this.router.navigate([this.returnUrl]);
          },
          error => {
             console.log(error)
          });

    }
  }
}
