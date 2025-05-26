/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ItemB3Component } from './itemB3.component';

describe('ItemB3Component', () => {
  let component: ItemB3Component;
  let fixture: ComponentFixture<ItemB3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemB3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemB3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
