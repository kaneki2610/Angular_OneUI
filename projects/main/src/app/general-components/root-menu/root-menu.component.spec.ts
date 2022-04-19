import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VnptRootMenuComponent } from './vnpt-root-menu.component';

describe('VnptRootMenuComponent', () => {
  let component: VnptRootMenuComponent;
  let fixture: ComponentFixture<VnptRootMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [VnptRootMenuComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VnptRootMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
