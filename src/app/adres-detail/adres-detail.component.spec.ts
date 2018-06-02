import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {AdresDetailComponent} from './adres-detail.component';

describe('AdresDetailComponent', () => {
  let component: AdresDetailComponent;
  let fixture: ComponentFixture<AdresDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AdresDetailComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdresDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
