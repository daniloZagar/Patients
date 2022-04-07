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
  constructor(private patientService: PatientsService) {}

  ngOnInit(): void {
    this.patientService.getPatients().subscribe((data) => {
      let patient = data.filter((d) => d.status === 'randomized');

      if (this.patientService.randomPatients.length > 0) {
        this.randomPatients = [
          ...patient,
          ...this.patientService.randomPatients,
        ];
        console.log(this.randomPatients);
      } else {
        this.randomPatients = [...patient];
      }
    });
  }
}
