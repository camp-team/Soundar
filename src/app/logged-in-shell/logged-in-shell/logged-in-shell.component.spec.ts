import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoggedInShellComponent } from './logged-in-shell.component';

describe('LoggedInShellComponent', () => {
  let component: LoggedInShellComponent;
  let fixture: ComponentFixture<LoggedInShellComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoggedInShellComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoggedInShellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
