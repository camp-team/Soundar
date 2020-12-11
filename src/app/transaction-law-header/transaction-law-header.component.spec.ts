import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransactionLawHeaderComponent } from './transaction-law-header.component';

describe('TransactionLawHeaderComponent', () => {
  let component: TransactionLawHeaderComponent;
  let fixture: ComponentFixture<TransactionLawHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TransactionLawHeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TransactionLawHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
