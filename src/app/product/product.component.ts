import { ProductService } from './../services/product.service';
import { ActivatedRoute, Router } from '@angular/router';
import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {Product} from '../model/product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
   @Input() product: Product;
   @Output() notifLike = new EventEmitter<Product>();
   @Input() priceInput: number;
   products: Product[];
   selectedProduct: Product;
   idx = '0';
   URL = 'http://localhost/backend/uploads/';
  constructor(private route: ActivatedRoute,private router: Router, private productService: ProductService) { }

  ngOnInit() {
    this.getProducts();
  }

  sendNotif(){
    this.notifLike.emit(this.product);
  }

  getColor(){
    if (this.product.quantity === 0){
      return 'red';
    }
  }
  getProducts(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.idx = id.toString();
    this.productService.getProducts().subscribe(
     (data: Product[]) => this.products = data
    );
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
    this.products = this.products.filter(product => product.like != product.like);
    this.selectedProduct.like=this.selectedProduct.like+1;
    this.productService.like(id,this.selectedProduct).subscribe(
      () => this.products = this.products.filter(product => product.like != product.like)
    );
    });

 }
}
