import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotLoggedInShellComponent } from './not-logged-in-shell.component';

describe('NotLoggedInShellComponent', () => {
  let component: NotLoggedInShellComponent;
  let fixture: ComponentFixture<NotLoggedInShellComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NotLoggedInShellComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NotLoggedInShellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
