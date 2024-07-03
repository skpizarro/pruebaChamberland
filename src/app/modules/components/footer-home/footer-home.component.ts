import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer-home',
  templateUrl: './footer-home.component.html',
  styleUrl: './footer-home.component.css'
})
export class FooterHomeComponent implements OnInit{
  currentYear:number=0;

  constructor(){};
  ngOnInit(): void {
    this.currentYear = new Date().getFullYear();
  }
}
