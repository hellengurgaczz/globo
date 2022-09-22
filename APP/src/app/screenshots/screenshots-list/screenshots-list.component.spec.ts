import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScreenshotsListComponent } from './screenshots-list.component';

describe('ScreenshotsListComponent', () => {
  let component: ScreenshotsListComponent;
  let fixture: ComponentFixture<ScreenshotsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScreenshotsListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ScreenshotsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
