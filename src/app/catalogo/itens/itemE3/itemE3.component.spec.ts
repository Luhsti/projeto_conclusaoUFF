/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ItemE3Component } from './itemE3.component';

describe('ItemE3Component', () => {
  let component: ItemE3Component;
  let fixture: ComponentFixture<ItemE3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemE3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemE3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
