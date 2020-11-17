import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecentMusicComponent } from './recent-music.component';

describe('RecentMusicComponent', () => {
  let component: RecentMusicComponent;
  let fixture: ComponentFixture<RecentMusicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecentMusicComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecentMusicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
