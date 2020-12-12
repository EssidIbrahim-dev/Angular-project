import { User } from './../../model/user';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {

  @Input() userIn: User;

  constructor() { }

  ngOnInit(): void {
  }

}
