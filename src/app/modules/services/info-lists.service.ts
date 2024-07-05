import { Injectable } from '@angular/core';
import { environment } from '../../environment-dev';
import { HttpClient } from '@angular/common/http';
import { Municipality } from '../interfaces/municipality.interface';
import { Department } from '../interfaces/department.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InfoListsService {

  private BASE_URL = environment.BASE_URL;

  constructor(private httpClient: HttpClient) { }

  findDepartmentsList():Observable<Department[]> {
    const uri = `${this.BASE_URL}/department/list`
    return this.httpClient.get<Department[]>(uri);
  }

  findMunicipalitiesListByDepartment(cdDepartment:number):Observable<Municipality[]> {
    const uri = `${this.BASE_URL}/municipality/list/${cdDepartment}`
    return this.httpClient.get<Municipality[]>(uri);
  }

}
