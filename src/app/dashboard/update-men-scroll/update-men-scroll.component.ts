import { Router } from '@angular/router';
import { FormGroup, FormBuilder } from '@angular/forms';
import { MenScroll } from './../../model/menscroll';
import { MenscrollService } from './../../services/menscroll.service';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-update-men-scroll',
  templateUrl: './update-men-scroll.component.html',
  styleUrls: ['./update-men-scroll.component.css']
})
export class UpdateMenScrollComponent implements OnInit {

  @Input()menscrollInUpdate: MenScroll
  selectedFile = null;
  form: FormGroup;
  uploadResponse;
  constructor(private formBuilder: FormBuilder,private router: Router,private menscrollService:MenscrollService) { }

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
    this.menscrollInUpdate.image=this.form.get('image').value.name;
    this.menscrollService.updateMenScroll(this.menscrollInUpdate.id,this.menscrollInUpdate).subscribe();
    this.menscrollService.uploadFile(formData).subscribe(
      (res) => {
        this.uploadResponse = res;
        console.log(res);
      },
      (err) => {
        console.log(err);
      }
    );
    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
      this.router.navigate(['dashboard/menscrolls']);
  });
  }

  close():void{
    document.getElementById('overlay3').style.display = 'none';
  }
}
