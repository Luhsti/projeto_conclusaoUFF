/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ItemB6Component } from './itemB6.component';

describe('ItemB6Component', () => {
  let component: ItemB6Component;
  let fixture: ComponentFixture<ItemB6Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemB6Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemB6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
