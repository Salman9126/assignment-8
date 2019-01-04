import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'assignment8';
  sendData = 'Hello form Parent';
  public text = '';
  public text2 = '';

  public getText(event:any){
    this.text2 = (<HTMLInputElement>event.target).value;
  }
}
