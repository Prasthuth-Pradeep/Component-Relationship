import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';



@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent {
  messages: any = [];
  items = [''];     
  inputForm: FormGroup;

  constructor( private myInputForm: FormBuilder ){
    this.inputForm = this.myInputForm.group({
      message:['']
    });
  }

  addMessage(newItem: string) {
    this.items.push(newItem);
  }
  
  onAdd(){
  this.messages.push(this.inputForm.value);
  // console.log(this.messages)
  }

}
