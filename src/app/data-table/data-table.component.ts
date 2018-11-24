import { Component, OnInit  , ViewChild} from '@angular/core';
import { DatatableComponent } from '@swimlane/ngx-datatable';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.css']
})
export class DataTableComponent implements OnInit {

  @ViewChild(DatatableComponent) public table: DatatableComponent;
  public rows:any = [];
  public currentPageLimit: number = 10;
  public currentVisible: number = 3;
  public readonly pageLimitOptions = [
    {value: 5},
    {value: 10},
    {value: 25},
    {value: 50},
    {value: 100},
  ];
  public readonly visibleOptions = [
    {value: 1},
    {value: 3},
    {value: 5},
    {value: 10},
  ];

  constructor(private http:HttpClient) {
    this.fetch()
    .subscribe(data =>  this.rows = data)
  }

  ngOnInit(){}
 
  fetch(){
    return this.http.get<any>('https://unpkg.com/@swimlane/ngx-datatable@7.3.0/assets/data/company.json')
  }
}
