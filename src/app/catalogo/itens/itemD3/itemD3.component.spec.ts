/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ItemD3Component } from './itemD3.component';

describe('ItemD3Component', () => {
  let component: ItemD3Component;
  let fixture: ComponentFixture<ItemD3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemD3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemD3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
