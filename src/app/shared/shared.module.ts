import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { CustomButtonComponent } from './custom-button/custom-button.component';
import { MatButtonModule } from '@angular/material/button';


@NgModule({
  declarations: [
    HeaderComponent,
    CustomButtonComponent,
  ],
  imports: [
    CommonModule,
    MatButtonModule
  ],
  exports: [
    HeaderComponent,
    CustomButtonComponent,
  ]
})
export class SharedModule { }
