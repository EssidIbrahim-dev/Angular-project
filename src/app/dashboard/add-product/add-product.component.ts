import { HttpClient } from '@angular/common/http';
import { ProductService } from './../../services/product.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from './../../model/product';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
enum CheckBoxType { Men, Women, NONE };
@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  products: Product[] = [];
  product: Product;
  idx = '0';
  selectedFile = null;
  form: FormGroup;
  uploadResponse;
  value;
  check_box_type = CheckBoxType;
  currentlyChecked: CheckBoxType;
  constructor(private router: Router,private formBuilder: FormBuilder, private route: ActivatedRoute, private productService: ProductService, private http: HttpClient) { }

  ngOnInit() {
    this.product = new Product();
    this.form = this.formBuilder.group({
      image: ['']
    });


  }

  selectCheckBox(targetType: CheckBoxType) {
    if(this.currentlyChecked === targetType) {
      this.currentlyChecked = CheckBoxType.NONE;
      return;
    }

    this.currentlyChecked = targetType;
  }
  onFileSelected(event){

    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      console.log(file);
      this.form.get('image').setValue(file);

    }
  }
  onItemChange(value){
    return value;
 }
  add(id: number, name: string, price: number, like: number, quantity: number, gender: string, image: string): void {

    const formData = new FormData();
    formData.append('image', this.form.get('image').value);
    image = this.form.get('image').value.name;
    gender=this.product.gender;

    this.productService.addProduct({id, name, price, like, quantity, gender, image} as Product).subscribe(
      () => this.products.push(this.product));
    this.productService.uploadFile(formData).subscribe(
      (res) => {
        this.uploadResponse = res;
        console.log(res);
      },
      (err) => {
        console.log(err);
      }
    );
    this.router.navigateByUrl('/..', { skipLocationChange: true }).then(() => {
      this.router.navigate(['dashboard/products']);
  });
  }
}
