import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { HeaderComponent } from './components/header/header.component';
import { OutdoorComponent } from './components/outdoor/outdoor.component';
import { OutdoorService } from './services/outdoor.service';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    HomeComponent,
    HeaderComponent,
    OutdoorComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    HttpClientModule,
  ],
  providers: [
    OutdoorService,
  ]
})
export class HomeModule { }
