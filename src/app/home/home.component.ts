import { HomescrollService } from './../services/homescroll.service';
import { HomeScroll } from './../model/homescroll';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from './../services/product.service';
import { Observable } from 'rxjs';
import { Product } from './../model/product';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  title: string;
  listProduct: Observable<Product[]>;
  priceMax: number;
  formState: boolean;
  serviceProductr: ProductService;
  menproducts: Product[];
  womenproducts: Product[];
  homescrolls: HomeScroll[];
  prod : number=1;
  idx = '0';
  URL = 'http://localhost/backend/uploads/';
   selectedProduct: Product;
   products: Product[];
  constructor(private route: ActivatedRoute,private productService: ProductService,private homescrollService: HomescrollService) { }
  ngOnInit(): void {
    this.title = 'E-Commerce';
    this.getMenProducts();
    this.getWomenProducts();
    this.getHomeScrolls();
    this.getProducts();
    this.listProduct = this.productService.getProducts();
    this.formState = false;
  }

  getProducts(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.idx = id.toString();
    this.productService.getProducts().subscribe(
     (data: Product[]) => this.products = data
    );
  }

  getMenProducts(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.idx = id.toString();
    this.productService.getMenProducts().subscribe(data => {
      this.menproducts = data;
    });
  }
  getWomenProducts(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.idx = id.toString();
    this.productService.getWomenProducts().subscribe(data => {
      this.womenproducts = data;
    });
  }
  /*incrementLike(product: Product){
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

  getHomeScrolls(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.homescrollService.getHomeScrolls().subscribe(data => {
      this.homescrolls = data;
    });
  }

     on(id:number) :void {
    this.productService.getProduct(id).subscribe(value => {
      this.selectedProduct=value;
    });
    document.getElementById('overlay2').style.display = 'block';
  }

    off() :void {
    document.getElementById('overlay2').style.display = 'none';
    }

     incrementLike(id:number) :void {
    this.productService.getProduct(id).subscribe(value => {
    this.selectedProduct=value;
    this.selectedProduct.like=this.selectedProduct.like+1;
    this.productService.like(id,this.selectedProduct).subscribe(
     () => this.products = this.products.filter(product => product.like != product.like)
    );
    });
    this.getMenProducts();
    this.getWomenProducts();
 }
}

