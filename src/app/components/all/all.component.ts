import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { IPatients } from 'src/app/interfaces/patients.interface';
import { PatientsService } from 'src/app/services/patients.service';

@Component({
  selector: 'app-all',
  templateUrl: './all.component.html',
  styleUrls: ['./all.component.scss'],
})
export class AllComponent implements OnInit {
  allPatients: IPatients[] = [];
  newRandomAllPatients: IPatients[] = [];
  patient: IPatients;
  emitRandom = new EventEmitter<IPatients>();
  constructor(private patientService: PatientsService) {}
  onPatAdded(e: IPatients) {
    this.patient = e;
    this.newRandomAllPatients = this.allPatients.filter(
      (allP) => allP.patientId !== e.patientId
    );
    this.patientService.passPatient(this.patient);
    this.allPatients = [...this.newRandomAllPatients];
  }
  ngOnInit(): void {
    this.patientService.getPatients().subscribe((data) => {
      console.log(data);
      this.allPatients = data;
    });
  }
}
