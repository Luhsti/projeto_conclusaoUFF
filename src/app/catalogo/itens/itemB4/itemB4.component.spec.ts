/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ItemB4Component } from './itemB4.component';

describe('ItemB4Component', () => {
  let component: ItemB4Component;
  let fixture: ComponentFixture<ItemB4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemB4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemB4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
