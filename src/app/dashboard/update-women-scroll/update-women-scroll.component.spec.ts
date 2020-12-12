import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateWomenScrollComponent } from './update-women-scroll.component';

describe('UpdateWomenScrollComponent', () => {
  let component: UpdateWomenScrollComponent;
  let fixture: ComponentFixture<UpdateWomenScrollComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateWomenScrollComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateWomenScrollComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
