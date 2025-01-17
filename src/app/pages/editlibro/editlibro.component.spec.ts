import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditlibroComponent } from './editlibro.component';

describe('EditlibroComponent', () => {
  let component: EditlibroComponent;
  let fixture: ComponentFixture<EditlibroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditlibroComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EditlibroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
