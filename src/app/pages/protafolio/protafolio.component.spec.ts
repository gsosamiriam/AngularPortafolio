import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProtafolioComponent } from './protafolio.component';

describe('ProtafolioComponent', () => {
  let component: ProtafolioComponent;
  let fixture: ComponentFixture<ProtafolioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProtafolioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProtafolioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
