import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MagazineDetailHeaderComponent } from './magazine-detail-header.component';

describe('MagazineDetailHeaderComponent', () => {
  let component: MagazineDetailHeaderComponent;
  let fixture: ComponentFixture<MagazineDetailHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MagazineDetailHeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MagazineDetailHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
