import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'NewHelloWorld';
  imgURL = '';
  ngOnInit() : void {
    this.title = "Hello from BridgeLabz.";
    this.imgURL = "../assets/blz_logo.png";
  }
}
