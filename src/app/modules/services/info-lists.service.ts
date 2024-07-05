import { Injectable } from '@angular/core';
import { environment } from '../../environment-dev';
import { HttpClient } from '@angular/common/http';
import { Municipality } from '../interfaces/municipality.interface';
import { Department } from '../interfaces/department.interface';
import { Observable } from 'rxjs';
import { ApiResponse } from '../interfaces/response.interface';

@Injectable({
  providedIn: 'root'
})
export class InfoListsService {

  private BASE_URL = environment.BASE_URL;

  constructor(private httpClient: HttpClient) { }

  findDepartmentsList():Observable<ApiResponse> {
    const uri = `${this.BASE_URL}/department/list`
    return this.httpClient.get<ApiResponse>(uri);
  }

  findMunicipalitiesListByDepartment(cdDepartment:number):Observable<ApiResponse> {
    const uri = `${this.BASE_URL}/municipality/list/${cdDepartment}`
    return this.httpClient.get<ApiResponse>(uri);
  }

}
