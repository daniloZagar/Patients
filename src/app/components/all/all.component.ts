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
  globalStatus: string;
  patientClicked: object;
  randomized(id: number) {
    let patient = this.patients.find((pat) => pat.patientId === id);
    this.globalStatus = 'randomize';
    patient.status = this.globalStatus;
    let newPatients = this.patients.map((pt) => {
      if (patient.patientId === pt.patientId) {
        pt.status = patient.status;
      }
      return pt;
    });
    console.log(newPatients);

    this.patients = [...newPatients];
    this.patientService.passRandomPatient(patient);
  }
  inactive(id: number) {
    let patient = this.patients.find((pat) => pat.patientId === id);
    this.globalStatus = 'inactive';
    patient.status = this.globalStatus;
    this.patientService.passInactivePatient(patient);
  }
  ngOnInit(): void {
    this.patientService.getPatients().subscribe((data) => {
      this.patients = data;
    });
  }
}
