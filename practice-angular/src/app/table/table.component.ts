import { Component } from '@angular/core';
import { ColDef } from 'ag-grid-community';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent {

      // DefaultColDef sets props common to all Columns
      public defaultColDef: ColDef = {
        sortable: true,
        filter: true,
      };
  
    // Each Column Definition results in one Column.
    public columnDefs: ColDef[] = [
      { field: 'id'},
      { field: 'name'},
      { field: 'brand' },
      { field: 'price' },
      { field: 'quantity'}
    ];
  
  public productList : any = [
      {
        id:1,
        name:"Pavilion",
        price:50000,
        brand:"hp",
        quantity:5
      },
      {
        id:2,
        name:"Predator",
        price:90000,
        brand:"acer",
        quantity:1
      },
      {
        id:3,
        name:"MacBook",
        price:55000,
        brand:"apple",
        quantity:2
      }];

  public filteredArray:any = [];
  constructor(){
    this.filteredArray = this.productList;
  }
  
  public sellItem(product:any){
      if(product.quantity === 0)
      {
        alert("out of stock");
        product.quantity = 0;
      } else{
        product.quantity--;
      }    
  }

  public sellProduct(productId:any){
    this.productList.map( (each:any)=>{
      if(each['id'] === productId){
        if(each['quantity'] > 0 ){
          each['quantity']--;
        }
        else{
          alert('out of stock');
        }
  
      }
      return each;
    });
  }

  public filterProductsbyBrand(event:any){
    this.filteredArray=this.productList.filter((each:any)=>{
      if(each.name === event.target.value) return each;
    })
  }
  
}



