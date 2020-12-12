import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddMenScrollComponent } from './add-men-scroll.component';

describe('AddMenScrollComponent', () => {
  let component: AddMenScrollComponent;
  let fixture: ComponentFixture<AddMenScrollComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddMenScrollComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddMenScrollComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
