import { HomescrollService } from './../../services/homescroll.service';
import { ActivatedRoute } from '@angular/router';
import { HomeScroll } from './../../model/homescroll';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-scroll',
  templateUrl: './home-scroll.component.html',
  styleUrls: ['./home-scroll.component.css']
})
export class HomeScrollComponent implements OnInit {

  name : any;
  key : string ='id';
  reverse: boolean = false;
  p: number = 1;
  homescrolls: HomeScroll[];
  idx = '0';
  selectedHomeScroll: HomeScroll;
  collection = { count: 60, data: [this.getHomeScrolls] };
  URL = 'http://localhost/backend/uploads/';
  msg: string;
  clss: string;

  constructor(private route: ActivatedRoute, private homescrollService: HomescrollService) {}

  ngOnInit() {
    this.getHomeScrolls();
  }

  getHomeScrolls(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.idx = id.toString();
    this.homescrollService.getHomeScrolls().subscribe(data => {
      this.homescrolls = data;
    });
  }

  //interface d'ajout home scroll

  on(): void {
    document.getElementById('overlay').style.display = 'block';
  }

  off(): void {
    document.getElementById('overlay').style.display = 'none';
  }

  preview(): void {
    document.getElementById('overlay4').style.display = 'block';
  }
  offPreview(): void {
    document.getElementById('overlay4').style.display = 'none';
  }
  //interface detail home scroll

  onN(id:number) :void {
    this.homescrollService.getHomeScroll(id).subscribe(value => {
      this.selectedHomeScroll=value;
    });
    document.getElementById('overlay2').style.display = 'block';
  }

  ofF() :void {
    document.getElementById('overlay2').style.display = 'none';
  }

  //interface delete home scroll

  ondelete(id: number): void {
    this.homescrolls = this.homescrolls.filter(homescroll => homescroll.id != id);
      this.homescrollService.deleteHomeScroll(id);

  }

  //interface update home scroll

  onNUpdate(id:number) :void {
    this.homescrollService.getHomeScroll(id).subscribe(value => {
      this.selectedHomeScroll=value;
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
    this.homescrolls =this.homescrolls.filter(homescrollService => {
      return homescrollService.name.toLocaleLowerCase().match(this.name.toLocaleLowerCase());
    });
  }
}

sort(key){
  this.key=key;
  this.reverse= !this.reverse;
}
}
