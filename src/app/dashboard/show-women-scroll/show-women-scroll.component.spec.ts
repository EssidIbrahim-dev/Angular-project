import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowWomenScrollComponent } from './show-women-scroll.component';

describe('ShowWomenScrollComponent', () => {
  let component: ShowWomenScrollComponent;
  let fixture: ComponentFixture<ShowWomenScrollComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowWomenScrollComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowWomenScrollComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
