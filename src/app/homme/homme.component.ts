import { MenScroll } from './../model/menscroll';
import { MenscrollService } from './../services/menscroll.service';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

import { ProductService } from './../services/product.service';
import { Product } from './../model/product';
import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-homme',
  templateUrl: './homme.component.html',
  styleUrls: ['./homme.component.css']
})
export class HommeComponent implements OnInit {
  listProduct: Observable<Product[]>;
  priceMax: number;
  formState: boolean;
  serviceProductr: ProductService;
  serviceMenScroll: MenscrollService;
  name : any;
  products: Product[];
  menscrolls: MenScroll[];
  idx = '0';
  key : string ='id';
  reverse: boolean = false;
  p: number = 1;
  constructor(private route: ActivatedRoute, private productService: ProductService, private menscrollService: MenscrollService) { }
  ngOnInit(): void {

    this.getProducts();
    this.getMenScrolls();
    this.formState = false;
    console.log(this.products);

  }

 getProducts(): void {
   const id = +this.route.snapshot.paramMap.get('id');
   this.idx = id.toString();
   this.productService.getMenProducts().subscribe(data => {
     this.products = data;
   });
 }

 getMenScrolls(): void {
  const id = +this.route.snapshot.paramMap.get('id');
  this.idx = id.toString();
  this.menscrollService.getMenScrolls().subscribe(datas => {
    this.menscrolls = datas;
  });
}
 /* incrementLike(product: Product){
    let i = this.listProduct.indexOf(product);
    this.listProduct[i].like++;


  pushProduct(p: Product){
    this.listProduct.push(p);
    console.log(this.listProduct);
    this.formState = false;
  } }*/
  showForm(){
    this.formState = true;
  }

  search(){
    if(this.name ==""){
    this.ngOnInit();}
    else{
      this.products =this.products.filter(productService => {
        return productService.name.toLocaleLowerCase().match(this.name.toLocaleLowerCase());
      });
    }
  }
}
