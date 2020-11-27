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
  userName : string = "";
  nameError :string = "";
  ngOnInit() : void {
    this.title = "Hello from BridgeLabz.";
    this.imgURL = "../assets/blz_logo.png";
    this.URL = "https://www.bridgelabz.com/"
  }
  onClick($event) {
    console.log("Sava Button is Clicked!", $event);
    window.open(this.URL, "_blank");
  }

  onInput($event) {
    console.log();
    let nameRegex = RegExp("^[A-Z]{1}[a-zA-z]{2,}$");
    if(nameRegex.test(this.userName))
    this.nameError = "";
    else 
    this.nameError = "Invalid User Name";
  }
}
