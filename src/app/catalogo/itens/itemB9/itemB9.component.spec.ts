/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ItemB9Component } from './itemB9.component';

describe('ItemB9Component', () => {
  let component: ItemB9Component;
  let fixture: ComponentFixture<ItemB9Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemB9Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemB9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
