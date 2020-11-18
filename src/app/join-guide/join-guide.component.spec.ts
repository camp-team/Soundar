import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JoinGuideComponent } from './join-guide.component';

describe('JoinGuideComponent', () => {
  let component: JoinGuideComponent;
  let fixture: ComponentFixture<JoinGuideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JoinGuideComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JoinGuideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
