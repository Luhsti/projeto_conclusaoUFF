/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ItemF1Component } from './itemF1.component';

describe('ItemF1Component', () => {
  let component: ItemF1Component;
  let fixture: ComponentFixture<ItemF1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemF1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemF1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
