/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ItemE5Component } from './itemE5.component';

describe('ItemE5Component', () => {
  let component: ItemE5Component;
  let fixture: ComponentFixture<ItemE5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemE5Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemE5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
