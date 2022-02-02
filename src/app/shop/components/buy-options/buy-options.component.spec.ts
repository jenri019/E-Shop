import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuyOptionsComponent } from './buy-options.component';

describe('BuyOptionsComponent', () => {
  let component: BuyOptionsComponent;
  let fixture: ComponentFixture<BuyOptionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuyOptionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BuyOptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
