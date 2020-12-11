import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransactionLawComponent } from './transaction-law.component';

describe('TransactionLawComponent', () => {
  let component: TransactionLawComponent;
  let fixture: ComponentFixture<TransactionLawComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TransactionLawComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TransactionLawComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
