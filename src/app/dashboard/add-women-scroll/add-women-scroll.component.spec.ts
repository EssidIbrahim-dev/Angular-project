import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddWomenScrollComponent } from './add-women-scroll.component';

describe('AddWomenScrollComponent', () => {
  let component: AddWomenScrollComponent;
  let fixture: ComponentFixture<AddWomenScrollComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddWomenScrollComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddWomenScrollComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
