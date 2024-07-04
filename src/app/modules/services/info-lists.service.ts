import { Injectable } from '@angular/core';
import { environment } from '../../environment-dev';
import { HttpClient } from '@angular/common/http';
import { Municipality } from '../interfaces/municipality.interface';

@Injectable({
  providedIn: 'root'
})
export class InfoListsService {

  private BASE_URL = environment.BASE_URL;

  constructor(private httpClient: HttpClient) { }

  findDepartments():Department[]{

  }

  findMunicipalities(cdDepartment:number):Municipality[]{

  }

}
