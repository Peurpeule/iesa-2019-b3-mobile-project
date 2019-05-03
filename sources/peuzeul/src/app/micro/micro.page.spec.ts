import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MicroPage } from './micro.page';

describe('MicroPage', () => {
  let component: MicroPage;
  let fixture: ComponentFixture<MicroPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MicroPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MicroPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
