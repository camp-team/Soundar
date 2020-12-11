import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TermsContentsComponent } from './terms-contents.component';

describe('TermsContentsComponent', () => {
  let component: TermsContentsComponent;
  let fixture: ComponentFixture<TermsContentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TermsContentsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TermsContentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
