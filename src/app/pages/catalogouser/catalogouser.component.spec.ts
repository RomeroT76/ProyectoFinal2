import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatalogouserComponent } from './catalogouser.component';

describe('CatalogouserComponent', () => {
  let component: CatalogouserComponent;
  let fixture: ComponentFixture<CatalogouserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CatalogouserComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CatalogouserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
