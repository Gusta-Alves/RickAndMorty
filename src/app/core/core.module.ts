import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreRoutingModule } from './core-routing.module';
import { ToolbarComponent } from './toolbar/toolbar.component';

import { MatToolbarModule } from '@angular/material/toolbar';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    ToolbarComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    CoreRoutingModule,
    MatToolbarModule
  ],
  exports: [
    ToolbarComponent,
    FooterComponent
  ]
})
export class CoreModule { }
