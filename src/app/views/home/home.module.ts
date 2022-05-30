import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { HeaderComponent } from './components/header/header.component';
import { OutdoorComponent } from './components/outdoor/outdoor.component';


@NgModule({
  declarations: [
    HomeComponent,
    HeaderComponent,
    OutdoorComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
