import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavBarUsersComponent } from './nav-bar-users.component';

describe('NavBarUsersComponent', () => {
  let component: NavBarUsersComponent;
  let fixture: ComponentFixture<NavBarUsersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavBarUsersComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NavBarUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
