import { Router } from '@angular/router';
import { HomescrollService } from './../../services/homescroll.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import { HomeScroll } from './../../model/homescroll';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-update-home-scroll',
  templateUrl: './update-home-scroll.component.html',
  styleUrls: ['./update-home-scroll.component.css']
})
export class UpdateHomeScrollComponent implements OnInit {

  @Input()homescrollInUpdate: HomeScroll
  selectedFile = null;
  form: FormGroup;
  uploadResponse;
  constructor(private formBuilder: FormBuilder,private router: Router,private homescrollService:HomescrollService) { }

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
    this.homescrollInUpdate.image=this.form.get('image').value.name;
    this.homescrollService.updateHomeScroll(this.homescrollInUpdate.id,this.homescrollInUpdate).subscribe();
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

  close():void{
    document.getElementById('overlay3').style.display = 'none';
  }
}
