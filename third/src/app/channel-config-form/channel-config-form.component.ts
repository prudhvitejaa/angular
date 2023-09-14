import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-channel-config-form',
  templateUrl: './channel-config-form.component.html',
  styleUrls: ['./channel-config-form.component.css']
})
export class ChannelConfigFormComponent {
  channelList:any=['SMS','Email']
  cType:any
  channeltype:any={
    SMS : [{
      type:"AWS",
      // type1:"cloud"
    }],
    Email : [{
      type : "Montril"
    }]
  }
  channelForm : any = new FormGroup({
    channelName : new FormControl(),
    channelType : new FormControl(),
    name : new FormControl(),
    userName : new FormControl(),
    password : new FormControl()
  })

  getChanneltype(event:any){
    let data=event.target.value
    this.cType=this.channeltype[data]
  }
  @Output() channelFormEvent : any=new EventEmitter();
  
  public formSubmit(){
    this.channelFormEvent.emit(this.channelForm.value)
  }
}
