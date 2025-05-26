/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ItemB1Component } from './itemB1.component';

describe('ItemB1Component', () => {
  let component: ItemB1Component;
  let fixture: ComponentFixture<ItemB1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemB1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemB1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
