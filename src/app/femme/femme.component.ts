import { WomenScroll } from './../model/womenscroll';
import { WomenscrollService } from './../services/womenscroll.service';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { ProductService } from './../services/product.service';

import { Product } from './../model/product';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-femme',
  templateUrl: './femme.component.html',
  styleUrls: ['./femme.component.css']
})
export class FemmeComponent implements OnInit {

    listProduct: Observable<Product[]>;
    priceMax: number;
    formState: boolean;
    name : any;
    serviceProductr: ProductService;
    products: Product[];
    serviceWomenScroll: WomenscrollService;
    womenscrolls: WomenScroll[];
    idx = '0';
    key: string ='id';
    reverse: boolean = false;
    p: number = 1;

    constructor(private route: ActivatedRoute, private productService: ProductService, private womenscrollService: WomenscrollService) { }
    ngOnInit(): void {
      this.getProducts();
      this.getWomenScrolls();
      this.formState = false;
      console.log(this.products);
    }
    getProducts(): void {
      const id = +this.route.snapshot.paramMap.get('id');
      this.idx = id.toString();
      this.productService.getWomenProducts().subscribe(data => {
        this.products = data;
      });
    }

    getWomenScrolls(): void {
     const id = +this.route.snapshot.paramMap.get('id');
     this.idx = id.toString();
     this.womenscrollService.getWomenScrolls().subscribe(datas => {
       this.womenscrolls = datas;
     });
   }
   /* incrementLike(product: Product){
      let i = this.listProduct.indexOf(product);
      this.listProduct[i].like++;
    }

    pushProduct(p: Product){
      this.listProduct.push(p);
      console.log(this.listProduct);
      this.formState = false;
    }*/
    showForm(){
      this.formState = true;
    }
    search(){
      if(this.name ==""){
      this.ngOnInit();}
      else{
        this.products = this.products.filter(productService => {
          return productService.name.toLocaleLowerCase().match(this.name.toLocaleLowerCase());
        });
      }
    }
  }
