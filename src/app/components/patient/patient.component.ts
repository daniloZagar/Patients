import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.scss'],
})
export class PatientComponent implements OnInit {
  @Input() firstName = '';
  @Input() lastName = '';
  @Input() email = '';
  @Input() phone = '';
  @Input() location = {};
  @Input() status = '';
  @Input() patientId = 0;
  @Input() sex = '';
  @Input() city = '';
  @Input() age = 0;
  constructor() {}

  ngOnInit(): void {}
}
