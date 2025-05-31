/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ItemC1Component } from './itemC1.component';

describe('ItemC1Component', () => {
  let component: ItemC1Component;
  let fixture: ComponentFixture<ItemC1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemC1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemC1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
