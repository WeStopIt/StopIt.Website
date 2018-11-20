import {Component, OnInit} from '@angular/core';
import {element} from "protractor";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [  "../../node_modules/bootstrap/dist/css/bootstrap.css",
    './app.component.scss']
})
export class AppComponent implements OnInit{

  userEmail : string
  userPassword : string
  errorMessage : string

  ngOnInit(): void {}

  onLoginClicked() {

    console.log(this.userEmail)
    console.log(this.userPassword)

    this.errorMessage = "You're wrong"

  }

}
