import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderGuideComponent } from './header-guide.component';

describe('HeaderGuideComponent', () => {
  let component: HeaderGuideComponent;
  let fixture: ComponentFixture<HeaderGuideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderGuideComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderGuideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
