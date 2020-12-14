import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MagazineChaptersComponent } from './magazine-chapters.component';

describe('MagazineChaptersComponent', () => {
  let component: MagazineChaptersComponent;
  let fixture: ComponentFixture<MagazineChaptersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MagazineChaptersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MagazineChaptersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
