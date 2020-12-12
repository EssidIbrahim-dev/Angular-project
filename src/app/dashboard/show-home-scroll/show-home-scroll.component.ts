import { HomeScroll } from './../../model/homescroll';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-show-home-scroll',
  templateUrl: './show-home-scroll.component.html',
  styleUrls: ['./show-home-scroll.component.css']
})
export class ShowHomeScrollComponent implements OnInit {

   @Input() homescrollIn: HomeScroll;
  URL = 'http://localhost/backend/uploads/';
  constructor() { }

  ngOnInit(): void {
  }

}
