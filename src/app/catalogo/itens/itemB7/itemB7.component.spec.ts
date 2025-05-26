/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ItemB7Component } from './itemB7.component';

describe('ItemB7Component', () => {
  let component: ItemB7Component;
  let fixture: ComponentFixture<ItemB7Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemB7Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemB7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
