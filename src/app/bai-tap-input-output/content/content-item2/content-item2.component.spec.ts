import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentItem2Component } from './content-item2.component';

describe('ContentItem2Component', () => {
  let component: ContentItem2Component;
  let fixture: ComponentFixture<ContentItem2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContentItem2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentItem2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
