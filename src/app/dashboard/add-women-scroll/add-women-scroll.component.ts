import { HttpClient } from '@angular/common/http';
import { WomenscrollService } from './../../services/womenscroll.service';
import { ActivatedRoute, Router } from '@angular/router';
import { WomenScroll } from './../../model/womenscroll';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-women-scroll',
  templateUrl: './add-women-scroll.component.html',
  styleUrls: ['./add-women-scroll.component.css']
})
export class AddWomenScrollComponent implements OnInit {

  form: FormGroup;
  womenscrolls: WomenScroll[] = [];
  womenscroll: WomenScroll;
  idx = '0';
  selectedFile = null;
  uploadResponse;
  constructor(private router: Router,private formBuilder: FormBuilder, private route: ActivatedRoute, private womenscrollService: WomenscrollService, private http: HttpClient) { }

  ngOnInit() {
    this.womenscroll = new WomenScroll();
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

  add(id: number, name: string, image : string): void {
    const formData = new FormData();
    formData.append('image', this.form.get('image').value);
    image = this.form.get('image').value.name;
    this.womenscrollService.addWomenScroll({id, name,image} as WomenScroll).subscribe(womenscroll => {
    this.womenscrolls.push(womenscroll);
        });
    this.womenscrollService.uploadFile(formData).subscribe(
      (res) => {
        this.uploadResponse = res;
        console.log(res);
      },
      (err) => {
        console.log(err);
      }
    );
    this.router.navigateByUrl('/..', { skipLocationChange: true }).then(() => {
      this.router.navigate(['dashboard/womenscrolls']);
  });
  }
}
