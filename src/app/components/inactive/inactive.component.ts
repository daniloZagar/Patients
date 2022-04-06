import { Component, OnInit } from '@angular/core';
import { IPatients } from 'src/app/interfaces/patients.interface';
import { PatientsService } from 'src/app/services/patients.service';

@Component({
  selector: 'app-inactive',
  templateUrl: './inactive.component.html',
  styleUrls: ['./inactive.component.scss'],
})
export class InactiveComponent implements OnInit {
  inactivePatients: IPatients[] = [];
  constructor(private patientService: PatientsService) {}

  ngOnInit(): void {
    this.patientService.getPatients().subscribe((data) => {
      console.log(data);
      data.filter((dt) => {
        if (dt.status === 'inactive') {
          this.inactivePatients.push(dt);
        }
      });
    });
    console.log(this.inactivePatients);
  }
}
