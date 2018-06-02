import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {AdresesComponent} from './adreses.component';

describe('AdresesComponent', () => {
  let component: AdresesComponent;
  let fixture: ComponentFixture<AdresesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AdresesComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdresesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
