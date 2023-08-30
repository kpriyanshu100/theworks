import { Component } from '@angular/core';
import { ApiServicesService } from '../api-services.service';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-resources',
  templateUrl: './resources.component.html',
  styleUrls: ['./resources.component.css']
})
export class ResourcesComponent {
  tableData: any;
  currentPageIndex: number = 1;
  constructor(private apiServices: ApiServicesService) { }

  ngOnInit() {
    this.getTableData(this.currentPageIndex+1);
  }

  getTableData(id:number) {
    this.apiServices.getTableData(id).subscribe((resp) => {
      this.tableData = resp;
      console.log(this.tableData);
    })
  }
  changePage(event: PageEvent) {
    this.currentPageIndex = event.pageIndex;
    console.log(this.currentPageIndex+1)
    this.getTableData(this.currentPageIndex+1)
  }
}
