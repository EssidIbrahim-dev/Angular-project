import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenCarouselComponent } from './men-carousel.component';

describe('MenCarouselComponent', () => {
  let component: MenCarouselComponent;
  let fixture: ComponentFixture<MenCarouselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenCarouselComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MenCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
