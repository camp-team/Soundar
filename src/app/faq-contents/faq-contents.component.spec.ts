import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FaqContentsComponent } from './faq-contents.component';

describe('FaqContentsComponent', () => {
  let component: FaqContentsComponent;
  let fixture: ComponentFixture<FaqContentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FaqContentsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FaqContentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
