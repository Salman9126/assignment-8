import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  @Output() myEvent = new EventEmitter();
  @Output() toPrant = new EventEmitter();
  @Input() public inData = '';

  constructor() { }

  ngOnInit() {
  }
  public str = '';
  
  public fun(str:string){
    this.str = str;
    this.myEvent.emit(this.str);
  }
  
  public send(){
    this.toPrant.emit('Hello from Child');
  }
}
