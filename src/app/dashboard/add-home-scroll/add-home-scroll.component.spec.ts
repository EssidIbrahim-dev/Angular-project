import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddHomeScrollComponent } from './add-home-scroll.component';

describe('AddHomeScrollComponent', () => {
  let component: AddHomeScrollComponent;
  let fixture: ComponentFixture<AddHomeScrollComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddHomeScrollComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddHomeScrollComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
