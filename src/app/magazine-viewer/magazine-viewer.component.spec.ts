import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MagazineViewerComponent } from './magazine-viewer.component';

describe('MagazineViewerComponent', () => {
  let component: MagazineViewerComponent;
  let fixture: ComponentFixture<MagazineViewerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MagazineViewerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MagazineViewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
