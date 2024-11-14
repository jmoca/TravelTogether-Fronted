import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { AddUsersGroupComponent } from './add-users-group.component';

describe('AddUsersGroupComponent', () => {
  let component: AddUsersGroupComponent;
  let fixture: ComponentFixture<AddUsersGroupComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [AddUsersGroupComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AddUsersGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
