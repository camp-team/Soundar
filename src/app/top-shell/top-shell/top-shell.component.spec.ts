import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopShellComponent } from './top-shell.component';

describe('TopShellComponent', () => {
  let component: TopShellComponent;
  let fixture: ComponentFixture<TopShellComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopShellComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TopShellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
