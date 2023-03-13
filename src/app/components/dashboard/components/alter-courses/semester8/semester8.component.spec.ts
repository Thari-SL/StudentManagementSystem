import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Semester8Component } from './semester8.component';

describe('Semester8Component', () => {
  let component: Semester8Component;
  let fixture: ComponentFixture<Semester8Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Semester8Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Semester8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
