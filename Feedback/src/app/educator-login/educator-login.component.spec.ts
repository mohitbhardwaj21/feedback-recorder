import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EducatorLoginComponent } from './educator-login.component';

describe('EducatorLoginComponent', () => {
  let component: EducatorLoginComponent;
  let fixture: ComponentFixture<EducatorLoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EducatorLoginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EducatorLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
