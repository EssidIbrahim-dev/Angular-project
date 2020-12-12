import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WomenCarouselComponent } from './women-carousel.component';

describe('WomenCarouselComponent', () => {
  let component: WomenCarouselComponent;
  let fixture: ComponentFixture<WomenCarouselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WomenCarouselComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WomenCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
