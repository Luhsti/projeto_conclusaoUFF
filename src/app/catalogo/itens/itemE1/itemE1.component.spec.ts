/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ItemE1Component } from './itemE1.component';

describe('ItemE1Component', () => {
  let component: ItemE1Component;
  let fixture: ComponentFixture<ItemE1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemE1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemE1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
