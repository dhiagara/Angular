import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultsBlocComponent } from './results-bloc.component';

describe('ResultsBlocComponent', () => {
  let component: ResultsBlocComponent;
  let fixture: ComponentFixture<ResultsBlocComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResultsBlocComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResultsBlocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
