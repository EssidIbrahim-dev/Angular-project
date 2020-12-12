import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateMenScrollComponent } from './update-men-scroll.component';

describe('UpdateMenScrollComponent', () => {
  let component: UpdateMenScrollComponent;
  let fixture: ComponentFixture<UpdateMenScrollComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateMenScrollComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateMenScrollComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
