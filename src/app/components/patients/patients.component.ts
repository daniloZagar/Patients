import { Component, Input, OnInit } from '@angular/core';
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
  ngOnInit(): void {}
}
