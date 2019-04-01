import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BaitapCarouselComponent } from './baitap-carousel.component';

describe('BaitapCarouselComponent', () => {
  let component: BaitapCarouselComponent;
  let fixture: ComponentFixture<BaitapCarouselComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BaitapCarouselComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BaitapCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
