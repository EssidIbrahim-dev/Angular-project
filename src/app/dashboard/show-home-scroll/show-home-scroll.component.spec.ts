import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowHomeScrollComponent } from './show-home-scroll.component';

describe('ShowHomeScrollComponent', () => {
  let component: ShowHomeScrollComponent;
  let fixture: ComponentFixture<ShowHomeScrollComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowHomeScrollComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowHomeScrollComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
