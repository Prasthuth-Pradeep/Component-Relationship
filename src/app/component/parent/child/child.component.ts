import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent {
  @Input()
  childData: any = [];

 
  @Output() 
  newItemEvent = new EventEmitter<string>();

  
  addNewMessage(value: string) {
    this.newItemEvent.emit(value);
  }

}
