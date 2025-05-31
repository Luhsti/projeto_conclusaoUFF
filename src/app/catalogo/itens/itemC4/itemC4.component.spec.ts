/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ItemC4Component } from './itemC4.component';

describe('ItemC4Component', () => {
  let component: ItemC4Component;
  let fixture: ComponentFixture<ItemC4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemC4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemC4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
