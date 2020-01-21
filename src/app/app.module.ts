import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MiddleComponent } from './middle/middle.component';
<<<<<<< HEAD
import { AddBrandComponent } from './add-brand/add-brand.component';
=======
import { ModelsComponent } from './models/models.component';
>>>>>>> 2516e6376e07a07af47deb24ba79423f3af824d7
import { ReportComponent } from './report/report.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MiddleComponent,
<<<<<<< HEAD
    AddBrandComponent,
=======
    ModelsComponent,
>>>>>>> 2516e6376e07a07af47deb24ba79423f3af824d7
    ReportComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
