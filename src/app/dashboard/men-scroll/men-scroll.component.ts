import { ActivatedRoute } from '@angular/router';
import { MenScroll } from './../../model/menscroll';
import { MenscrollService } from './../../services/menscroll.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-men-scroll',
  templateUrl: './men-scroll.component.html',
  styleUrls: ['./men-scroll.component.css']
})
export class MenScrollComponent implements OnInit {

 name : any;
  key : string ='id';
  reverse: boolean = false;
  p: number = 1;
  menscrolls: MenScroll[];
  idx = '0';
  selectedMenScroll: MenScroll;
  collection = { count: 60, data: [this.getMenScrolls] };
  URL = 'http://localhost/backend/uploads/';
  msg: string;
  clss: string;

  constructor(private route: ActivatedRoute, private menscrollService: MenscrollService) {}

  ngOnInit() {
    this.getMenScrolls();
  }

  getMenScrolls(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.idx = id.toString();
    this.menscrollService.getMenScrolls().subscribe(data => {
      this.menscrolls = data;
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
    this.menscrollService.getMenScroll(id).subscribe(value => {
      this.selectedMenScroll=value;
    });
    document.getElementById('overlay2').style.display = 'block';
  }

  ofF() :void {
    document.getElementById('overlay2').style.display = 'none';
  }

  //interface delete men scroll

  ondelete(id: number): void {
    this.menscrolls = this.menscrolls.filter(menscroll => menscroll.id != id);
      this.menscrollService.deleteMenScroll(id);

  }

  //interface update men scroll

  onNUpdate(id:number) :void {
    this.menscrollService.getMenScroll(id).subscribe(value => {
      this.selectedMenScroll=value;
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
    this.menscrolls =this.menscrolls.filter(menscrollService => {
      return menscrollService.name.toLocaleLowerCase().match(this.name.toLocaleLowerCase());
    });
  }
}

sort(key){
  this.key=key;
  this.reverse= !this.reverse;
}
}
