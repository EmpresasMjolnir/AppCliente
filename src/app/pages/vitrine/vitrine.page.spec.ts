import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VitrinePage } from './vitrine.page';

describe('VitrinePage', () => {
  let component: VitrinePage;
  let fixture: ComponentFixture<VitrinePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VitrinePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VitrinePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
