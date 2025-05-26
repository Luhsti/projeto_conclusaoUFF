/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ItemA4Component } from './itemA4.component';

describe('ItemA4Component', () => {
  let component: ItemA4Component;
  let fixture: ComponentFixture<ItemA4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemA4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemA4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
