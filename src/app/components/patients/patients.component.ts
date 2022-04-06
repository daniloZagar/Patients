import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { PatientsService } from 'src/app/services/patients.service';
import { IPatients } from 'src/app/interfaces/patients.interface';

@Component({
  selector: 'app-patients',
  templateUrl: './patients.component.html',
  styleUrls: ['./patients.component.scss'],
})
export class PatientsComponent implements OnInit {
  constructor() {}
  @Input() patients: IPatients[] = [];
  @Output() pat = new EventEmitter<IPatients>();
  randomized(id: number) {
    let patient = this.patients.find((pat) => pat.patientId === id);
    this.pat.emit(patient);
  }
  inactive(id: number) {}
  ngOnInit(): void {}
}
