import { Component, OnInit } from '@angular/core';
import { IPatients } from 'src/app/interfaces/patients.interface';
import { PatientsService } from 'src/app/services/patients.service';

@Component({
  selector: 'app-random',
  templateUrl: './random.component.html',
  styleUrls: ['./random.component.scss'],
})
export class RandomComponent implements OnInit {
  randomPatients: IPatients[] = [];
  addedRandomPatient: IPatients[] = [];
  patient: IPatients;
  constructor(private patientService: PatientsService) {}
  onPatAdded(e: IPatients) {
    console.log(e);
    this.patient = e;
  }
  ngOnInit(): void {
    this.patientService.getPatients().subscribe((data) => {
      console.log(data);
      data.filter((dt) => {
        if (dt.status === 'randomized') {
          this.randomPatients.push(dt);
          if (this.patientService.patients.length !== 0) {
            this.randomPatients = [
              ...this.randomPatients,
              ...this.patientService.patients,
            ];
          }
        }
      });
    });
  }
}
