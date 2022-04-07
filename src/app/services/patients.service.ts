import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IPatients } from '../interfaces/patients.interface';
@Injectable({
  providedIn: 'root',
})
export class PatientsService {
  constructor(private http: HttpClient) {}
  baseUrl = 'http://localhost:3000/api';
  randomPatients = [];
  inactivePatients = [];
  allPatients = [];
  getPatients() {
    return this.http.get<IPatients[]>(`/api/patients`);
  }
  passRandomPatient(patient: IPatients) {
    this.randomPatients.push(patient);
  }
  passInactivePatient(patient: IPatients) {
    this.inactivePatients.push(patient);
  }
  passAllPatients(allPatients) {
    this.allPatients = allPatients;
  }
}
