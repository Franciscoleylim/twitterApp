import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreadorComponent } from './creador.component';

describe('CreadorComponent', () => {
  let component: CreadorComponent;
  let fixture: ComponentFixture<CreadorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreadorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
