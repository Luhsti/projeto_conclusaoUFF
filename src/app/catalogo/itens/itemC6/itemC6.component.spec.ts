/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ItemC6Component } from './itemC6.component';

describe('ItemC6Component', () => {
  let component: ItemC6Component;
  let fixture: ComponentFixture<ItemC6Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemC6Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemC6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
