import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutContentsComponent } from './about-contents.component';

describe('AboutContentsComponent', () => {
  let component: AboutContentsComponent;
  let fixture: ComponentFixture<AboutContentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutContentsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutContentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
