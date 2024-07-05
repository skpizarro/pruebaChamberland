import { Component, Input, input, OnInit } from '@angular/core';
import { TableData } from '../../interfaces/table-data.interface';
import { Merchant } from '../../interfaces/merchant.interface';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrl: './table.component.css'
})
export class TableComponent implements OnInit {

  @Input()
  merchantsList:Merchant[] = [];

  tableData: TableData[] = [
    // { name: 'Company A', phone: '+1234567890', email: 'info@companya.com', registrationDate: new Date('2023-01-01'), establishmentsCount: 10, status: 'Active' },
    // { name: 'Company B', phone: '+9876543210', email: 'support@companyb.com', registrationDate: new Date('2022-06-15'), establishmentsCount: 5, status: 'Inactive' },
    // { name: 'Company C', phone: '+1234567890', email: 'info@companyc.com', registrationDate: new Date('2023-04-12'), establishmentsCount: 12, status: 'Active' },
    // { name: 'Company D', phone: '+9876543210', email: 'support@companyd.com', registrationDate: new Date('2022-10-05'), establishmentsCount: 8, status: 'Inactive' },
    // { name: 'Company E', phone: '+1234567890', email: 'info@companye.com', registrationDate: new Date('2023-03-28'), establishmentsCount: 15, status: 'Active' },

  ];

  currentPage = 1;
  pageSize = 10;
  totalPages = Math.ceil(this.tableData.length / this.pageSize);
  pageNumbers = Array.from({ length: this.pageSize }, (_, i) => i + 1);

  constructor() { }

  ngOnInit(): void {
    this.transformToTableData();
    this.updatePageNumbers();
  }

  transformToTableData(): void{
    if(this.merchantsList.length > 0){
      this.merchantsList.forEach(merchant => {
        const data:TableData={
          name: merchant.name,
          phone: merchant.phone,
          email: merchant.email,
          registrationDate: merchant.registrationDate,
          establishmentsCount: merchant.establishments.length,
          status: merchant.status
        };
        this.tableData.push(data);
      });
    }
  }

  nextPage(): void {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
      this.updatePageNumbers();
    }
  }

  setPage(pageNumber: number): void {
    if (pageNumber >= 1 && pageNumber <= this.totalPages) {
      this.currentPage = pageNumber;
      this.updatePageNumbers();
    }
  }

  previousPage(): void {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.updatePageNumbers();
    }
  }

  updatePageNumbers(): void {
    const startPage = Math.max(1, this.currentPage - (this.pageSize / 2));
    const endPage = Math.min(this.totalPages, startPage + this.pageSize - 1);
    this.pageNumbers = Array.from({ length: endPage - startPage + 1 }, (_, i) => startPage + i);
  }
}
