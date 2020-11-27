import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'NewHelloWorld';
  imgURL;
  URL;
  ngOnInit() : void {
    this.title = "Hello from BridgeLabz.";
    this.imgURL = "../assets/blz_logo.png";
    this.URL = "https://www.bridgelabz.com/"
  }
  onClick($event) {
    console.log("Sava Button is Clicked!",$event);
    window.open(this.URL, "_blank");
  }
}
