import { Component, Input } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-storage',
  templateUrl: './storage.component.html',
  styleUrls: ['./storage.component.css']
})
export class StorageComponent {
  /*
  storageForm : any = new FormGroup({
    storageType : new FormControl('',[Validators.required,Validators.minLength(3)]),
    storageAccessKey : new FormControl('',[Validators.required,Validators.minLength(6),]),
    storageSecretKey : new FormControl('',[Validators.required,Validators.minLength(8)]),
    storageBucketName : new FormControl('',[Validators.required,Validators.minLength(5)]),
    storageRegion : new FormControl('',[Validators.required,Validators.minLength(3)]),
  });

  */


  storageForm : any;
  constructor(private formBuilder:FormBuilder){
    this.storageForm = this.formBuilder.group({
        storageType : ['',[Validators.required,Validators.minLength(3)]],
        storageAccessKey : ['',[Validators.required,Validators.minLength(3)]],
        storageSecretKey : ['',[Validators.required,Validators.minLength(3)]],
        storageBucketName : ['',[Validators.required,Validators.minLength(3)]],
        storageRegion : ['',[Validators.required,Validators.minLength(3)]],
    });
  }

  getFormControl(controlName:any){
      return this.storageForm.controls[controlName]
  }

  saveStorageForm() {
    console.log(this.storageForm);
  }

}


// Validators.pattern('^(?=.*[A-Z])(?=.*[0-9])(?=.*[a-z]).{8,}$')
// Validators.pattern(/[a-zA-Z0-9_.]+/)