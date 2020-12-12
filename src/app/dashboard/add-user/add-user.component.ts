import { UserService } from './../../services/user.service';
import { User } from './../../model/user';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

  users: User[]=[];
  user: User;
  idx = '0';

  constructor(private route: ActivatedRoute, private userService:UserService) { }

  ngOnInit() {
    this.user = new User();
  }
  close():void{
    document.getElementById('overlay').style.display = 'none';
  }
  add(id: number,name: string,email: string,phone: number,password: string): void {
    this.userService.addUser({id,name,email,phone,password} as User).subscribe(user => {
        this.users.push(user);
      });
      this.close();
  }
}
