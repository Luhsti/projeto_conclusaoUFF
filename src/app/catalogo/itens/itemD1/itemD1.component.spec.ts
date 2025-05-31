/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ItemD1Component } from './itemD1.component';

describe('ItemD1Component', () => {
  let component: ItemD1Component;
  let fixture: ComponentFixture<ItemD1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemD1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemD1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
