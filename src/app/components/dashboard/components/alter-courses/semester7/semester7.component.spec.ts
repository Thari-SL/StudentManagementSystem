import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Semester7Component } from './semester7.component';

describe('Semester7Component', () => {
  let component: Semester7Component;
  let fixture: ComponentFixture<Semester7Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Semester7Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Semester7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
