import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EdituseradminComponent } from './edituseradmin.component';

describe('EdituseradminComponent', () => {
  let component: EdituseradminComponent;
  let fixture: ComponentFixture<EdituseradminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EdituseradminComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EdituseradminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
