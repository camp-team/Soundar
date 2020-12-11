import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransactionLawContentsComponent } from './transaction-law-contents.component';

describe('TransactionLawContentsComponent', () => {
  let component: TransactionLawContentsComponent;
  let fixture: ComponentFixture<TransactionLawContentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TransactionLawContentsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TransactionLawContentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
