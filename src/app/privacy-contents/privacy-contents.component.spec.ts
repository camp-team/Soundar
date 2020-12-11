import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrivacyContentsComponent } from './privacy-contents.component';

describe('PrivacyContentsComponent', () => {
  let component: PrivacyContentsComponent;
  let fixture: ComponentFixture<PrivacyContentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrivacyContentsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrivacyContentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
