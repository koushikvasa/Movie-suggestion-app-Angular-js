import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuspenceComponent } from './suspence.component';

describe('SuspenceComponent', () => {
  let component: SuspenceComponent;
  let fixture: ComponentFixture<SuspenceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuspenceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuspenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
