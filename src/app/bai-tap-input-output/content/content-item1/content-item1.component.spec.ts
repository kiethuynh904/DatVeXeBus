import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentItem1Component } from './content-item1.component';

describe('ContentItem1Component', () => {
  let component: ContentItem1Component;
  let fixture: ComponentFixture<ContentItem1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContentItem1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentItem1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
