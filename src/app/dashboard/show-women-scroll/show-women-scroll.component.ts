import { WomenScroll } from './../../model/womenscroll';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-show-women-scroll',
  templateUrl: './show-women-scroll.component.html',
  styleUrls: ['./show-women-scroll.component.css']
})
export class ShowWomenScrollComponent implements OnInit {

  @Input() womenscrollIn: WomenScroll;
  URL = 'http://localhost/backend/uploads/';
  constructor() { }

  ngOnInit(): void {
  }

}
