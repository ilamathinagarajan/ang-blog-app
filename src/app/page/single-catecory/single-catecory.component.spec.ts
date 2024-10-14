import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleCatecoryComponent } from './single-catecory.component';

describe('SingleCatecoryComponent', () => {
  let component: SingleCatecoryComponent;
  let fixture: ComponentFixture<SingleCatecoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SingleCatecoryComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SingleCatecoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
