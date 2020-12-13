import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MagazineContentsComponent } from './magazine-contents.component';

describe('MagazineContentsComponent', () => {
  let component: MagazineContentsComponent;
  let fixture: ComponentFixture<MagazineContentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MagazineContentsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MagazineContentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
