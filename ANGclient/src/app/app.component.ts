// Imports
import { Component } from '@angular/core';
import { UserModel } from "./models/user.model";
import { MessageModel } from "./models/message.model";
import { AuthService } from './services/auth/auth.service';

// Définition
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [AuthService]
})

// Export
export class AppComponent {
  public myTitle: String;
  public formData: UserModel;
  public loginData: UserModel;
  public message: MessageModel;

  constructor(private authService: AuthService){
    this.myTitle = 'MEAN curse';
    this.formData = {
      email: undefined,
      name: undefined,
      password: undefined
    }
    this.loginData = {
      email: undefined,
      password: undefined
    }
  }
  
  public formSubmit(): void{
    if(!this.formData.name || !this.formData.email || !this.formData.password){
      alert("Veuillez remplir tous les champs");
    }else{
      this.authService.register(this.formData)
      .then( apiResponse => console.log(apiResponse) )
      .catch( apiResponse => console.error(apiResponse)  );
    }
  }

  public loginUser(): void{
    this.authService.login(this.loginData)
    .then( apiResponse => console.log(apiResponse) )
    .catch( apiResponse => console.error(apiResponse)  );
  }
}
