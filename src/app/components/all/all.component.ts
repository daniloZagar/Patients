import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { PatientsService } from 'src/app/services/patients.service';
import { IPatients } from 'src/app/interfaces/patients.interface';

@Component({
  selector: 'app-all',
  templateUrl: './all.component.html',
  styleUrls: ['./all.component.scss'],
})
export class AllComponent implements OnInit {
  constructor(private patientService: PatientsService) {}
  patients: IPatients[] = [];
  patientClicked: object;
  randomStatus: string;
  randomId: number;
  randomized(id: number) {
    let patient = this.patients.find((pat) => pat.patientId === id);
    this.randomStatus = 'randomize';
    this.randomId = patient.patientId;
    patient.status = this.randomStatus;
    let newPatients = this.patients.map((pt) => {
      if (pt.patientId === id) {
        pt.status = this.randomStatus;
      }
      return pt;
    });
    this.patientService.passAllPatients(newPatients);
    console.log(this.patients);
    this.patientService.passRandomPatient(patient);
  }
  inactive(id: number) {
    let patient = this.patients.find((pat) => pat.patientId === id);
    let inactiveStatus = 'inactive';
    patient.status = inactiveStatus;
    this.patientService.passInactivePatient(patient);
  }
  ngOnInit(): void {
    this.patientService.getPatients().subscribe((data) => {
      this.patients = data;
      if(this.patientService.allPatients.length>0){
        this.patients = [...this.patientService.allPatients]
      }
      console.log(this.patients);
    });
  }
}
