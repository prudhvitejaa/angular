import { Component } from '@angular/core';
import { ColDef } from 'ag-grid-community';

@Component({
  selector: 'app-channel-config-list',
  templateUrl: './channel-config-list.component.html',
  styleUrls: ['./channel-config-list.component.css']
})
export class ChannelConfigListComponent {
  public rowData:any=[]
  updateChannelList(data:any){
    this.rowData.push(data)
    this.rowData=[...this.rowData]
  }

  public columnDefs: ColDef[] = [
    {field:'channelName'},
    {field:'channelType'},
    {field:'name'},
    {field:'userName'},
    {field:'password'}
  ];

  public defaultColDef : ColDef = {
    sortable : true,
    filter : true,
  };

  
}
