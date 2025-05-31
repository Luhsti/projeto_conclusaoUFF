/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ItemE4Component } from './itemE4.component';

describe('ItemE4Component', () => {
  let component: ItemE4Component;
  let fixture: ComponentFixture<ItemE4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemE4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemE4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
