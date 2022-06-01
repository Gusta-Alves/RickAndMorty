import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { HeaderComponent } from './components/header/header.component';
import { OutdoorComponent } from './components/outdoor/outdoor.component';
import { OutdoorService } from './services/outdoor.service';
import { HttpClientModule } from '@angular/common/http';
import { CardsComponent } from './components/cards/cards.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
@NgModule({
  declarations: [
    HomeComponent,
    HeaderComponent,
    OutdoorComponent,
    CardsComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    HttpClientModule,
    MatCardModule,
    MatButtonModule,
  ],
  providers: [
    OutdoorService,
  ]
})
export class HomeModule { }
