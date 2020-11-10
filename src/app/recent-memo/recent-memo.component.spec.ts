import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecentMemoComponent } from './recent-memo.component';

describe('RecentMemoComponent', () => {
  let component: RecentMemoComponent;
  let fixture: ComponentFixture<RecentMemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecentMemoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecentMemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
