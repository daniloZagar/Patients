import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { PatientsService } from 'src/app/services/patients.service';
import { IPatients } from 'src/app/interfaces/patients.interface';

@Component({
  selector: 'app-patients',
  templateUrl: './patients.component.html',
  styleUrls: ['./patients.component.scss'],
})
export class PatientsComponent implements OnInit {
  constructor(private patientService: PatientsService) {}
  patients: IPatients[] = [];
  ngOnInit(): void {
    this.patientService.getPatients().subscribe((data) => {
      console.log(data);
      this.patients = data;
    });
  }
}
