/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ItemB8Component } from './itemB8.component';

describe('ItemB8Component', () => {
  let component: ItemB8Component;
  let fixture: ComponentFixture<ItemB8Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemB8Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemB8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
