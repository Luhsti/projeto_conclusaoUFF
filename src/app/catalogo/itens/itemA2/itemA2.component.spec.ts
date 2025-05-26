/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ItemA2Component } from './itemA2.component';

describe('ItemA2Component', () => {
  let component: ItemA2Component;
  let fixture: ComponentFixture<ItemA2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemA2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemA2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
