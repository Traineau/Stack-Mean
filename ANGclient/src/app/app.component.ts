// Imports
import { Component } from '@angular/core';
import { UserModel } from "./models/user.model";

// Définition
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

// Export
export class AppComponent {
  public myTitle: String;
  public formData: UserModel;

  constructor(){
    this.myTitle = 'Hello Angular';
    this.formData = {
      email: undefined,
      name: undefined,
      password: undefined
    }
  }
  
  public formSubmit(email: String){
    console.log(this.formData);
  }
}
