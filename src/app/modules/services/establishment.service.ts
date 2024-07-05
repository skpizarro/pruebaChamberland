import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environment-dev';
import { ApiResponse } from '../interfaces/response.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EstablishmentService {

  private BASE_URL = environment.BASE_URL;

  constructor(private httpClient: HttpClient) { }


}
