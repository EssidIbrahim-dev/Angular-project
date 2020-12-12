import { Router } from '@angular/router';
import { UserService } from './../../services/user.service';
import { User } from './../../model/user';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent implements OnInit {


  @Input() userInUpdate:User

  constructor(private router: Router,private userService:UserService) { }

  ngOnInit() {
  }

  save(): void {
    this.userService.updateUser(this.userInUpdate.id,this.userInUpdate).subscribe();
    this.router.navigateByUrl('/..', { skipLocationChange: true }).then(() => {
      this.router.navigate(['dashboard/users']);
  });
  }

  close():void{
    document.getElementById('overlay3').style.display = 'none';
  }
}
