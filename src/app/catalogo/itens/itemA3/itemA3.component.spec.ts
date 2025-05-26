/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ItemA3Component } from './itemA3.component';

describe('ItemA3Component', () => {
  let component: ItemA3Component;
  let fixture: ComponentFixture<ItemA3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemA3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemA3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
