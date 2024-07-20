import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UgestionComponent } from './ugestion.component';

describe('UgestionComponent', () => {
  let component: UgestionComponent;
  let fixture: ComponentFixture<UgestionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UgestionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UgestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
