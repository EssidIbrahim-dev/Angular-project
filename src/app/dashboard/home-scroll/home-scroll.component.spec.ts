import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeScrollComponent } from './home-scroll.component';

describe('HomeScrollComponent', () => {
  let component: HomeScrollComponent;
  let fixture: ComponentFixture<HomeScrollComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeScrollComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeScrollComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
