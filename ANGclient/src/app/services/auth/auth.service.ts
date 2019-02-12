import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from "@angular/common/http";
import { UserModel } from "../../models/user.model";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  // variables
  private apiUrl: String = 'http://localhost:9876/api/auth'

  constructor( private http: HttpClient ) { }

  public register( data: UserModel ): Promise<any>{
    // Configurer le header de la requête
    let myHeader = new HttpHeaders();
    myHeader.append('Content-Type', 'application/json');

    // Créer la requête
    return this.http.post( `${this.apiUrl}/register`, data, { headers: myHeader } )
    .toPromise()
    .then()
    .catch();

  }  
}
