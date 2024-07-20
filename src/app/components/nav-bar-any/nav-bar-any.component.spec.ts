import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavBarAnyComponent } from './nav-bar-any.component';

describe('NavBarAnyComponent', () => {
  let component: NavBarAnyComponent;
  let fixture: ComponentFixture<NavBarAnyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavBarAnyComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NavBarAnyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
