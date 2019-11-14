import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeguirComponent } from './seguir.component';

describe('SeguirComponent', () => {
  let component: SeguirComponent;
  let fixture: ComponentFixture<SeguirComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeguirComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeguirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
