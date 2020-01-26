import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { IEmployee} from './employee'
import { Observable } from 'rxjs';


@Injectable()

export class EmployeeService {
  
  private _url: string= "/assets/employees.json";
  constructor( private http: HttpClient) { }
  //creer observable
  getEmployees() : Observable<IEmployee[]>{
    //caster le retour du get
    return this.http.get<IEmployee[]>(this._url)
  }


}
