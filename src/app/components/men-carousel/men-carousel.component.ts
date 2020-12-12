import { ActivatedRoute } from '@angular/router';
import { MenscrollService } from './../../services/menscroll.service';
import { MenScroll } from './../../model/menscroll';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-men-carousel',
  templateUrl: './men-carousel.component.html',
  styleUrls: ['./men-carousel.component.css']
})
export class MenCarouselComponent implements OnInit {
  URL = 'http://localhost/backend/uploads/';
  menscrolls: MenScroll[];
  constructor(private route: ActivatedRoute, private menscrollService: MenscrollService) { }

  ngOnInit(): void {
    this.getMenScrolls();
  }

  getMenScrolls(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.menscrollService.getMenScrolls().subscribe(data => {
      this.menscrolls = data;
    });
  }
}
