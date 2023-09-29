import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { FormBuilder, FormGroup } from '@angular/forms';
import { DataManagementService } from '../data-management.service';
import { DataSourceListComponent } from '../data-source-list/data-source-list.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-data-source-form',
  templateUrl: './data-source-form.component.html',
  styleUrls: ['./data-source-form.component.css'],
})
export class DataSourceFormComponent {
  dbSourceForm:any;
  constructor(public dialogRef: MatDialogRef<DataSourceFormComponent>,
              private fb:FormBuilder,
              private dbServiceRef:DataManagementService,
              private router:Router
             ) {
    this.dbSourceForm = this.fb.group({
      dbType:[''],
      dbName:[''],
      url:[''],
      portNo:[''],
      userName:[''],
      password:['']
    })
  }


  onSave(){
    this.dbServiceRef.saveData(this.dbSourceForm.value);



    /* 
      1. this.router.routeReuseStrategy.shouldReuseRoute = () => false;:

          Angular's route reuse strategy is responsible for determining whether to reuse or 
          recreate a component when navigating between routes.

          By setting shouldReuseRoute to false, you are essentially telling Angular
          not to reuse the current route/component, even if it's the same route.

          This ensures that the component will be recreated.

      2. const currentUrl = this.router.url;

          This line retrieves the current URL of the router. 
          It stores the URL in the currentUrl variable for later use.

      3. this.router.navigateByUrl('/', { skipLocationChange: true })
         .then(() => { 
                        this.router.navigate([currentUrl]
          });

          this.router.navigateByUrl('/'): This navigates to a temporary or "dummy" route,
          in this case, the root URL '/'.
          { skipLocationChange: true }: This option is used to skip adding the navigation 
          to the browser's history. It means that the browser's back and forward buttons
          won't be affected by this navigation.
          .then(() => { this.router.navigate([currentUrl])}): After navigating to the root URL,
          it immediately navigates back to the original URL stored in currentUrl. 
          This effectively triggers a reload of the current route and its associated component.

      4. In summary,this code sequence ensures that when the button is clicked 
         (or some action is taken), the component is reloaded by navigating to the same route.
         It forces Angular to recreate the component and, as a result, initialize its state and 
         lifecycle hooks as if it were being visited for the first time.

        This technique is often used when you want to refresh or reset the component's state 
        without changing the overall route or URL. 
        It can be handy for scenarios where you need to clear user input 
        or fetch updated data for the same route.
    */



    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    const currentUrl = this.router.url;
    this.router.navigateByUrl('/', { skipLocationChange: true })
    .then(() => this.router.navigate([currentUrl]));

  }

  }
