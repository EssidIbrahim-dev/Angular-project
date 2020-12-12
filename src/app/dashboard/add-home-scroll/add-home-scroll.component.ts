import { HttpClient } from '@angular/common/http';
import { HomescrollService } from './../../services/homescroll.service';
import { ActivatedRoute, Router } from '@angular/router';
import { HomeScroll } from './../../model/homescroll';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-home-scroll',
  templateUrl: './add-home-scroll.component.html',
  styleUrls: ['./add-home-scroll.component.css']
})
export class AddHomeScrollComponent implements OnInit {

  form: FormGroup;
  homescrolls: HomeScroll[] = [];
  homescroll: HomeScroll;
  idx = '0';
  selectedFile = null;
  uploadResponse;

  constructor(private router: Router,private formBuilder: FormBuilder, private route: ActivatedRoute, private homescrollService: HomescrollService, private http: HttpClient) { }

  ngOnInit() {
    this.homescroll = new HomeScroll();
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
    this.homescrollService.addHomeScroll({id, name, image} as HomeScroll).subscribe(
        () => this.homescrolls.push(this.homescroll));
    this.homescrollService.uploadFile(formData).subscribe(
      (res) => {
        this.uploadResponse = res;
        console.log(res);
      },
      (err) => {
        console.log(err);
      }
    );
    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
      this.router.navigate(['dashboard/homescrolls']);
  });
  }
}
