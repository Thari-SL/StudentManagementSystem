import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Semester5Component } from './semester5.component';

describe('Semester5Component', () => {
  let component: Semester5Component;
  let fixture: ComponentFixture<Semester5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Semester5Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Semester5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
