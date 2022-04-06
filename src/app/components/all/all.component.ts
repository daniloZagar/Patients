import { Component, OnInit } from '@angular/core';
import { IPatients } from 'src/app/interfaces/patients.interface';
import { PatientsService } from 'src/app/services/patients.service';

@Component({
  selector: 'app-all',
  templateUrl: './all.component.html',
  styleUrls: ['./all.component.scss'],
})
export class AllComponent implements OnInit {
  allPatients: IPatients[] = [];
  constructor(private patientService: PatientsService) {}

  ngOnInit(): void {
    this.patientService.getPatients().subscribe((data) => {
      console.log(data);
      this.allPatients = data;
    });
  }
}
