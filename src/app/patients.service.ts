import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PatientsService {

    constructor(private http: HttpClient) { }

    listPatients(): Observable<any>{
        return this.http.get("http://localhost:3000/patients");

    }
}
