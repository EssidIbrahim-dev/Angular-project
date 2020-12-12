import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WomenScrollComponent } from './women-scroll.component';

describe('WomenScrollComponent', () => {
  let component: WomenScrollComponent;
  let fixture: ComponentFixture<WomenScrollComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WomenScrollComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WomenScrollComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
