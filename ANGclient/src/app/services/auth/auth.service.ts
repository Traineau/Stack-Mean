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
    return this.http.post( `http://localhost:9876/api/user`, data, { headers: myHeader } )
    .toPromise()
    .then(this.getData)
    .catch(this.handleError);
  }  

  public login( data: UserModel ): Promise<any>{
    // Configurer le header de la requête
    let myHeader = new HttpHeaders();
    myHeader.append('Content-Type', 'application/json');

    // Créer la requête
    return this.http.post( `${this.apiUrl}/login`, data, { headers: myHeader } )
    .toPromise()
    .then(this.getData)
    .catch(this.handleError);
  }  

  // Get the API response
  private getData(res: any){
      return res || {};
  }

  // Get the APi error
  private handleError(err: any){
    return Promise.reject(err);
  }
}
