import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowMenScrollComponent } from './show-men-scroll.component';

describe('ShowMenScrollComponent', () => {
  let component: ShowMenScrollComponent;
  let fixture: ComponentFixture<ShowMenScrollComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowMenScrollComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowMenScrollComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
