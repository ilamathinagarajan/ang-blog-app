import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatecoryNavbarComponent } from './catecory-navbar.component';

describe('CatecoryNavbarComponent', () => {
  let component: CatecoryNavbarComponent;
  let fixture: ComponentFixture<CatecoryNavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CatecoryNavbarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CatecoryNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
