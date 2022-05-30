import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreRoutingModule } from './core-routing.module';
import { ToolbarComponent } from './toolbar/toolbar.component';

import { MatToolbarModule } from '@angular/material/toolbar';

@NgModule({
  declarations: [
    ToolbarComponent
  ],
  imports: [
    CommonModule,
    CoreRoutingModule,
    MatToolbarModule
  ],
  exports: [
    ToolbarComponent
  ]
})
export class CoreModule { }
