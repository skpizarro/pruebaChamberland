import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environment-dev';
import { ApiResponse } from '../interfaces/response.interface';

@Injectable({
  providedIn: 'root'
})
export class MerchantService {


  private BASE_URL = environment.BASE_URL;

  constructor(private httpClient: HttpClient) { }

  findMerchantsList():Observable<ApiResponse> {
    const uri = `${this.BASE_URL}/merchant/list`
    return this.httpClient.get<ApiResponse>(uri);
  }
}
