import { User } from './../../model/user';
import { UserService } from './../../services/user.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  name: any;
  key: string ='id';
  reverse: boolean = false;
  p: number = 1;
  users: User[];
  idx = '0';
  selectedUser: User;
  collection = { count: 60, data: [this.getUsers] };


  constructor(private route: ActivatedRoute, private userService: UserService) {}

  ngOnInit() {
    this.getUsers();
  }

  getUsers(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.idx = id.toString();
    this.userService.getUsers().subscribe(data => {
      this.users = data;
    });
  }

  //interface d'ajout user

  on(): void {
    document.getElementById('overlay').style.display = 'block';
  }

  off(): void {
    document.getElementById('overlay').style.display = 'none';
  }

  //interface detail user

  onN(id:number) :void {
    this.userService.getUser(id).subscribe(value => {
      this.selectedUser=value;
    });
    document.getElementById('overlay2').style.display = 'block';
  }

  ofF() :void {
    document.getElementById('overlay2').style.display = 'none';
  }

  //interface delete user

  ondelete(id: number): void {
    this.users = this.users.filter(user => user.id != id);
      this.userService.deleteUser(id);
  }

  //interface update user

  onNUpdate(id:number) :void {
    this.userService.getUser(id).subscribe(value => {
      this.selectedUser=value;
    });
    document.getElementById('overlay3').style.display = 'block';

  }

  ofFUpdate() :void {
    document.getElementById('overlay3').style.display = 'none';
  }

search(){
  if(this.name ==""){
  this.ngOnInit();}
  else{
    this.users =this.users.filter(userService => {
      return userService.name.toLocaleLowerCase().match(this.name.toLocaleLowerCase());
    });
  }
}

sort(key){
  this.key=key;
  this.reverse= !this.reverse;
}
}
