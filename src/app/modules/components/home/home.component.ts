import { Component, OnDestroy, OnInit } from '@angular/core';
import { MerchantService } from '../../services/merchant.service';
import { Subscription } from 'rxjs';
import { ApiResponse } from '../../interfaces/response.interface';
import { Merchant } from '../../interfaces/merchant.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit,OnDestroy{

  _merchantsList:Subscription = new Subscription();
  merchantsList:Merchant[] = [];

  constructor(private merchantService:MerchantService){}


  ngOnInit(): void {
    this.getMerchantList();
  }

  getMerchantList(){
    this._merchantsList =  this.merchantService.findMerchantsList().subscribe(
      {
        next:(response:ApiResponse)=>{
          this.merchantsList = response.data;
        },
        error:()=>{
          console.log("Ha ocurrido un error al recuperar la lista de comerciantes");
        }
      }
    )

  }

  ngOnDestroy(): void {

  }



}
