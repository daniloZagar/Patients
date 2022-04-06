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
      console.log(data);
      data.filter((dt) => {
        if (dt.status === 'randomized') {
          this.randomPatients.push(dt);
        }
      });
    });
    console.log(this.randomPatients);
  }
}
