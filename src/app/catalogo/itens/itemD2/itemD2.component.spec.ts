/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ItemD2Component } from './itemD2.component';

describe('ItemD2Component', () => {
  let component: ItemD2Component;
  let fixture: ComponentFixture<ItemD2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemD2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemD2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
