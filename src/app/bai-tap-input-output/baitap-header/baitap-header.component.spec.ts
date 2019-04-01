import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BaitapHeaderComponent } from './baitap-header.component';

describe('BaitapHeaderComponent', () => {
  let component: BaitapHeaderComponent;
  let fixture: ComponentFixture<BaitapHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BaitapHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BaitapHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
