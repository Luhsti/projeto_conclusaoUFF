/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ItemE7Component } from './itemE7.component';

describe('ItemE7Component', () => {
  let component: ItemE7Component;
  let fixture: ComponentFixture<ItemE7Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemE7Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemE7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
