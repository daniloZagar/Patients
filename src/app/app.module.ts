import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PatientComponent } from './components/patient/patient.component';
import { HttpClientModule } from '@angular/common/http';
import { RandomComponent } from './components/random/random.component';
import { InactiveComponent } from './components/inactive/inactive.component';
import { AllComponent } from './components/all/all.component';

@NgModule({
  declarations: [
    AppComponent,
    PatientComponent,
    RandomComponent,
    InactiveComponent,
    AllComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
