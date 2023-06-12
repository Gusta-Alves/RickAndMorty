import { NgModule } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';

import { CoreRoutingModule } from './core-routing.module';
import { ToolbarComponent } from './toolbar/toolbar.component';

import { MatToolbarModule } from '@angular/material/toolbar';
import { FooterComponent } from './footer/footer.component';
import { OutdoorService } from './services/outdoor.service';
import { OutdoorComponent } from './outdoor/outdoor.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    ToolbarComponent,
    FooterComponent,
    OutdoorComponent
  ],
  imports: [
    CommonModule,
    NgOptimizedImage,
    CoreRoutingModule,
    MatToolbarModule,
    HttpClientModule,
  ],
  exports: [
    ToolbarComponent,
    FooterComponent,
    OutdoorComponent
  ],
  providers: [
    OutdoorService,
  ]
})
export class CoreModule { }
