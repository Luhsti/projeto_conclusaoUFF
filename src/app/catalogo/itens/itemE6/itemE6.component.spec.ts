/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ItemE6Component } from './itemE6.component';

describe('ItemE6Component', () => {
  let component: ItemE6Component;
  let fixture: ComponentFixture<ItemE6Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemE6Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemE6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
