/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ItemA1Component } from './itemA1.component';

describe('ItemA1Component', () => {
  let component: ItemA1Component;
  let fixture: ComponentFixture<ItemA1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemA1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemA1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
