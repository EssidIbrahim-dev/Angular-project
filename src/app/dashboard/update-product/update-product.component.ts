import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ProductService } from './../../services/product.service';
import { Product } from './../../model/product';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css']
})
export class UpdateProductComponent implements OnInit {
  @Output() delete = new EventEmitter<Product>();
  @Input() productInUpdate:Product
  selectedFile = null;
  form: FormGroup;
  uploadResponse;
  product: Product;
  products: Product[];
  updated:boolean=false;
  constructor(private router: Router,private formBuilder: FormBuilder,private productService:ProductService) { }

  ngOnInit() {
    this.form = this.formBuilder.group({
      image: ['']
    });
  }
  onFileSelected(event){

    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      console.log(file);
      this.form.get('image').setValue(file);

    }
  }

  save(): void {
    const formData = new FormData();
    formData.append('image', this.form.get('image').value);
    this.productInUpdate.image=this.form.get('image').value.name;
    this.productService.updateProduct(this.productInUpdate.id,this.productInUpdate).subscribe(

);
    this.productService.uploadFile(formData).subscribe(
      (res) => {
        this.uploadResponse = res;
        console.log(res);
      },
      (err) => {
        console.log(err);
      }
    );
    this.close();
    this.refresh();
  }
  refresh(){
    this.router.navigateByUrl('/..', { skipLocationChange: true }).then(() => {
      this.router.navigate(['dashboard/products']);
  });
  }
  close():void{
    document.getElementById('overlay3').style.display = 'none';
    this.refresh();
  }
}
