/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ItemC5Component } from './itemC5.component';

describe('ItemC5Component', () => {
  let component: ItemC5Component;
  let fixture: ComponentFixture<ItemC5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemC5Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemC5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
