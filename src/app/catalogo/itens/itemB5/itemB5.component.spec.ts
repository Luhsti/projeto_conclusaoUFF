/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ItemB5Component } from './itemB5.component';

describe('ItemB5Component', () => {
  let component: ItemB5Component;
  let fixture: ComponentFixture<ItemB5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemB5Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemB5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
