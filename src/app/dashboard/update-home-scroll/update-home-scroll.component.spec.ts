import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateHomeScrollComponent } from './update-home-scroll.component';

describe('UpdateHomeScrollComponent', () => {
  let component: UpdateHomeScrollComponent;
  let fixture: ComponentFixture<UpdateHomeScrollComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateHomeScrollComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateHomeScrollComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
