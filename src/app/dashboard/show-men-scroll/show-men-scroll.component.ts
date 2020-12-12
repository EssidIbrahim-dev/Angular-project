import { MenScroll } from './../../model/menscroll';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-show-men-scroll',
  templateUrl: './show-men-scroll.component.html',
  styleUrls: ['./show-men-scroll.component.css']
})
export class ShowMenScrollComponent implements OnInit {

  @Input() menscrollIn: MenScroll;
  URL = 'http://localhost/backend/uploads/';
  constructor() { }

  ngOnInit(): void {
  }

}
