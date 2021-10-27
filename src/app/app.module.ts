import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { PatientsComponent } from './patients/patients.component';

import { PatientsService } from './patients.service';

@NgModule({
  declarations: [
    AppComponent,
    PatientsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [HttpClientModule, PatientsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
