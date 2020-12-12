import { WomenscrollService } from './../../services/womenscroll.service';
import { ActivatedRoute } from '@angular/router';
import { WomenScroll } from './../../model/womenscroll';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-women-carousel',
  templateUrl: './women-carousel.component.html',
  styleUrls: ['./women-carousel.component.css']
})
export class WomenCarouselComponent implements OnInit {

  URL = 'http://localhost/backend/uploads/';
  womenscrolls: WomenScroll[];
  constructor(private route: ActivatedRoute, private womenscrollService: WomenscrollService) { }

  ngOnInit(): void {
    this.getWomenScrolls();
  }

  getWomenScrolls(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.womenscrollService.getWomenScrolls().subscribe(data => {
      this.womenscrolls = data;
    });
  }
}
