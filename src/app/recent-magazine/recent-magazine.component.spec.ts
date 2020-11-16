import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecentMagazineComponent } from './recent-magazine.component';

describe('RecentMagazineComponent', () => {
  let component: RecentMagazineComponent;
  let fixture: ComponentFixture<RecentMagazineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecentMagazineComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecentMagazineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
