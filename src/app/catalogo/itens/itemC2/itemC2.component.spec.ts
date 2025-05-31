/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ItemC2Component } from './itemC2.component';

describe('ItemC2Component', () => {
  let component: ItemC2Component;
  let fixture: ComponentFixture<ItemC2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemC2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemC2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
