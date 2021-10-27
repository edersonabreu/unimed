import { Component, OnInit } from '@angular/core';
import { PatientsService } from '../patients.service';

@Component({
  selector: 'app-patients',
  templateUrl: './patients.component.html',
  styleUrls: ['./patients.component.css']
})
export class PatientsComponent implements OnInit {

    patients: Array<any> = new Array();

  constructor(private patientsService: PatientsService) { }

  ngOnInit(): void {
      this.listPatients();
  }

  listPatients(){
    this.patientsService.listPatients().subscribe(patients => {
        this.patients = patients;
    }, err =>{
        console.log('Erro ao listar os pacientes', err);
    })
  }

}
