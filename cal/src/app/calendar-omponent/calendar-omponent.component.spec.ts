import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalendarOmponentComponent } from './calendar-omponent.component';

describe('CalendarOmponentComponent', () => {
  let component: CalendarOmponentComponent;
  let fixture: ComponentFixture<CalendarOmponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalendarOmponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalendarOmponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
