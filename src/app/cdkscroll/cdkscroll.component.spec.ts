import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CdkscrollComponent } from './cdkscroll.component';

describe('CdkscrollComponent', () => {
  let component: CdkscrollComponent;
  let fixture: ComponentFixture<CdkscrollComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CdkscrollComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CdkscrollComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
