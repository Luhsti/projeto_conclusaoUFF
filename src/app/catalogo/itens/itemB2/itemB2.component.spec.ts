/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ItemB2Component } from './itemB2.component';

describe('ItemB2Component', () => {
  let component: ItemB2Component;
  let fixture: ComponentFixture<ItemB2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemB2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemB2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
