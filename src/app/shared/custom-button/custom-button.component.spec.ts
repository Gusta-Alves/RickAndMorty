import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomButtonComponent } from './custom-button.component';

@Component({
  template: `<app-custom-button>conteudo</app-custom-button>`
})
class TestCustomButton {}

describe('CustomButtonComponent', () => {
  let component: CustomButtonComponent;
  let fixture: ComponentFixture<CustomButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomButtonComponent, TestCustomButton ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(`button should have a class called by c-custom-button-- + theme`, () => {
    const button = fixture.debugElement.nativeElement.querySelector('button');
    component.theme = "primary";
    fixture.detectChanges();

    expect(button.classList).toContain('c-custom-button--primary')
  });

  it('button shold show ng content', () => {
    const testCustomButton = TestBed.createComponent(TestCustomButton);
    const button = testCustomButton.debugElement.nativeElement.querySelector('button');

    expect(button.textContent).toEqual('conteudo');
  });
});
