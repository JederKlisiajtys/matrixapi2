import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HeaderComponent } from './components/header/header.component';
import { PointItemComponent } from './components/point-item/point-item.component';
import { PointsComponent } from './components/points/points.component';
import { ButtonComponent } from './components/button/button.component';
import { AddPointComponent } from './components/add-point/add-point.component';
import {HttpClientModule} from '@angular/common/http';
import { SearchComponent } from './components/search/search.component';
import { DistanceComponent } from './components/distance/distance.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PointItemComponent,
    PointsComponent,
    ButtonComponent,
    AddPointComponent,
    SearchComponent,
    DistanceComponent
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
