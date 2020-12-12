import { Router } from '@angular/router';
import { FormGroup, FormBuilder } from '@angular/forms';
import { WomenscrollService } from './../../services/womenscroll.service';
import { WomenScroll } from './../../model/womenscroll';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-update-women-scroll',
  templateUrl: './update-women-scroll.component.html',
  styleUrls: ['./update-women-scroll.component.css']
})
export class UpdateWomenScrollComponent implements OnInit {

  @Input() womenscrollInUpdate: WomenScroll
  form: FormGroup;
  uploadResponse;
  selectedFile = null;
  constructor(private router: Router,private formBuilder: FormBuilder,private menscrollService:WomenscrollService) { }

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
    this.womenscrollInUpdate.image=this.form.get('image').value.name;
    this.menscrollService.updateWomenScroll(this.womenscrollInUpdate.id,this.womenscrollInUpdate).subscribe();
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
      this.router.navigate(['dashboard/womenscrolls']);
  });
  }

  close():void{
    document.getElementById('overlay3').style.display = 'none';
  }
}
