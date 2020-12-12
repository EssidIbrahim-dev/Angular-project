import { WomenscrollService } from './../../services/womenscroll.service';
import { ActivatedRoute } from '@angular/router';
import { WomenScroll } from './../../model/womenscroll';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-women-scroll',
  templateUrl: './women-scroll.component.html',
  styleUrls: ['./women-scroll.component.css']
})

export class WomenScrollComponent implements OnInit {

  name : any;
  key : string ='id';
  reverse: boolean = false;
  p: number = 1;
  womenscrolls: WomenScroll[];
  idx = '0';
  selectedWomenScroll: WomenScroll;
  collection = { count: 60, data: [this.getWomenScrolls] };
  URL = 'http://localhost/backend/uploads/';
  msg: string;
  clss: string;

  constructor(private route: ActivatedRoute, private womenscrollService: WomenscrollService) {}

  ngOnInit() {
    this.getWomenScrolls();
  }

  getWomenScrolls(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.idx = id.toString();
    this.womenscrollService.getWomenScrolls().subscribe(data => {
      this.womenscrolls = data;
    });
  }

  //interface d'ajout men scroll

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
  //interface detail men scroll

  onN(id:number) :void {
    this.womenscrollService.getWomenScroll(id).subscribe(value => {
      this.selectedWomenScroll=value;
    });
    document.getElementById('overlay2').style.display = 'block';
  }

  ofF() :void {
    document.getElementById('overlay2').style.display = 'none';
  }

  //interface delete men scroll

  ondelete(id: number): void {
    this.womenscrolls = this.womenscrolls.filter(womenscroll => womenscroll.id != id);
    this.womenscrollService.deleteWomenScroll(id);

  }

  //interface update men scroll

  onNUpdate(id:number) :void {
    this.womenscrollService.getWomenScroll(id).subscribe(value => {
      this.selectedWomenScroll=value;
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
    this.womenscrolls =this.womenscrolls.filter(womenscrollService => {
      return womenscrollService.name.toLocaleLowerCase().match(this.name.toLocaleLowerCase());
    });
  }
}

sort(key){
  this.key=key;
  this.reverse= !this.reverse;
}
}
