import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenScrollComponent } from './men-scroll.component';

describe('MenScrollComponent', () => {
  let component: MenScrollComponent;
  let fixture: ComponentFixture<MenScrollComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenScrollComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MenScrollComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
