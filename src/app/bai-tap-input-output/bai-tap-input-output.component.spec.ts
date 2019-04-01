import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BaiTapInputOutputComponent } from './bai-tap-input-output.component';

describe('BaiTapInputOutputComponent', () => {
  let component: BaiTapInputOutputComponent;
  let fixture: ComponentFixture<BaiTapInputOutputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BaiTapInputOutputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BaiTapInputOutputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
