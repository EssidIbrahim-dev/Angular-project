import { ProductService } from './../../services/product.service';
import { Product } from './../../model/product';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})

export class ProductListComponent implements OnInit {
  name : any;
  key : string ='id';
  reverse: boolean = false;
  p: number = 1;
  products: Product[];
  idx = '0';
  selectedProduct: Product;
  //collection = { count: 60, data: [this.getProducts] };
  URL = 'http://localhost/backend/uploads/';
  msg: string;
  clss: string;

  constructor(private route: ActivatedRoute, private productService: ProductService) {}

  ngOnInit() {
    this.getProducts();
  }

  getProducts(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.idx = id.toString();
    this.productService.getProducts().subscribe(
     (data: Product[]) => this.products = data
    );
  }

  ondelete(id: number){
    this.products = this.products.filter(product => product.id != id);
      this.productService.deleteProduct(id);
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

  sort(key){
    this.key=key;
    this.reverse= !this.reverse;
  }

  previewMen(): void {
    document.getElementById('overlay4').style.display = 'block';
  }
  offPreview(): void {
    document.getElementById('overlay4').style.display = 'none';
  }

  previewWomen(): void {
    document.getElementById('overlay5').style.display = 'block';
  }
  offPreviewWomen(): void {
    document.getElementById('overlay5').style.display = 'none';
  }
  onNUpdate(id:number) :void {
      this.productService.getProduct(id).subscribe(value => {
        this.selectedProduct=value;
      });
      document.getElementById('overlay3').style.display = 'block';

    }

  ofFUpdate() :void {
    document.getElementById('overlay3').style.display = 'none';
  }
  on(): void {
    document.getElementById('overlay').style.display = 'block';
  }

  off(): void {
     this.getProducts();
    document.getElementById('overlay').style.display = 'none';
  }

  onN(id:number) :void {
    this.productService.getProduct(id).subscribe(value => {
      this.selectedProduct=value;
    });
    document.getElementById('overlay2').style.display = 'block';
  }

  ofF() :void {
    this.getProducts();
    document.getElementById('overlay2').style.display = 'none';
  }

}
