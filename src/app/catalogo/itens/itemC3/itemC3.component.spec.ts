/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ItemC3Component } from './itemC3.component';

describe('ItemC3Component', () => {
  let component: ItemC3Component;
  let fixture: ComponentFixture<ItemC3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemC3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemC3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
