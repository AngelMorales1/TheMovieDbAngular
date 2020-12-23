import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SlideCastComponent } from './slide-cast.component';

describe('SlideCastComponent', () => {
  let component: SlideCastComponent;
  let fixture: ComponentFixture<SlideCastComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SlideCastComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SlideCastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
