import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrivacyHeaderComponent } from './privacy-header.component';

describe('PrivacyHeaderComponent', () => {
  let component: PrivacyHeaderComponent;
  let fixture: ComponentFixture<PrivacyHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrivacyHeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrivacyHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
