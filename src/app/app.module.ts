import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PatientComponent } from './components/patients/patient/patient.component';
import { PatientsComponent } from './components/patients/patients.component';
import { HttpClientModule } from '@angular/common/http';
import { RandomComponent } from './components/random/random.component';
import { InactiveComponent } from './components/inactive/inactive.component';
import { AllComponent } from './components/all/all.component';

@NgModule({
  declarations: [AppComponent, PatientsComponent, PatientComponent, RandomComponent, InactiveComponent, AllComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
