import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IPatients } from '../interfaces/patients.interface';
@Injectable({
  providedIn: 'root',
})
export class PatientsService {
  constructor(private http: HttpClient) {}
  baseUrl = 'http://localhost:3000/api';
  patients = [];
  getPatients() {
    return this.http.get<IPatients[]>(`/api/patients`);
  }
  passPatient(patient) {
    this.patients.push(patient);
  }
}
