import { HttpClient } from '@angular/common/http';
import { MenscrollService } from './../../services/menscroll.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MenScroll } from './../../model/menscroll';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-men-scroll',
  templateUrl: './add-men-scroll.component.html',
  styleUrls: ['./add-men-scroll.component.css']
})
export class AddMenScrollComponent implements OnInit {

  form: FormGroup;
  menscrolls: MenScroll[] = [];
  menscroll: MenScroll;
  idx = '0';
  selectedFile = null;
  uploadResponse;

  constructor(private router: Router,private formBuilder: FormBuilder, private route: ActivatedRoute, private menscrollService: MenscrollService, private http: HttpClient) { }

  ngOnInit() {
    this.menscroll = new MenScroll();
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
    this.menscrollService.addMenScroll({id, name, image} as MenScroll).subscribe(menscroll => {
    this.menscrolls.push(menscroll);
        });
    this.menscrollService.uploadFile(formData).subscribe(
      (res) => {
        this.uploadResponse = res;
        console.log(res);
      },
      (err) => {
        console.log(err);
      }
    );
    this.router.navigateByUrl('/..', { skipLocationChange: true }).then(() => {
      this.router.navigate(['dashboard/menscrolls']);
  });
  }
}
