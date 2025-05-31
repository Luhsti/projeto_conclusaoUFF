/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ItemE2Component } from './itemE2.component';

describe('ItemE2Component', () => {
  let component: ItemE2Component;
  let fixture: ComponentFixture<ItemE2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemE2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemE2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
