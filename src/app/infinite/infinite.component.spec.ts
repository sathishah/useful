import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfiniteComponent } from './infinite.component';

describe('InfiniteComponent', () => {
  let component: InfiniteComponent;
  let fixture: ComponentFixture<InfiniteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfiniteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InfiniteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
