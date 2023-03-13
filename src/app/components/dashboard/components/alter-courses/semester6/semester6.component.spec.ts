import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Semester6Component } from './semester6.component';

describe('Semester6Component', () => {
  let component: Semester6Component;
  let fixture: ComponentFixture<Semester6Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Semester6Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Semester6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
