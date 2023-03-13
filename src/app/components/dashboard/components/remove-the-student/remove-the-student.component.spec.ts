import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RemoveTheStudentComponent } from './remove-the-student.component';

describe('RemoveTheStudentComponent', () => {
  let component: RemoveTheStudentComponent;
  let fixture: ComponentFixture<RemoveTheStudentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RemoveTheStudentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RemoveTheStudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
