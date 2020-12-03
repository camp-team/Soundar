import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MemoContentsComponent } from './memo-contents.component';

describe('MemoContentsComponent', () => {
  let component: MemoContentsComponent;
  let fixture: ComponentFixture<MemoContentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MemoContentsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MemoContentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
