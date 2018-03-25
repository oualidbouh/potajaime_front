import {Injectable} from "@angular/core";
import {tap} from 'rxjs/operators/tap';
import {ReplaySubject, Observable} from "rxjs";
import {Storage} from "@ionic/storage";
import {HttpClient} from "@angular/common/http";
import {JwtHelperService} from "@auth0/angular-jwt";
import {Conf} from '../../conf/conf';
import { User } from "../../models/User";
import {Headers,RequestOptions } from '@angular/http';

@Injectable()
export class AuthProvider {

  public jwtTokenName = 'Authorization';
  public idPotagerKey = 'Potager'

  public authUser = new ReplaySubject<any>(1);

  constructor(private readonly httpClient: HttpClient,
              public readonly storage: Storage,
              public readonly jwtHelper: JwtHelperService) {
  }

  login(values: any) {
       return this.httpClient.post(Conf.SERVER_URL+"login", values, {responseType: 'text'})
      .pipe(tap(jwt => this.handleJwtResponse(jwt.split(" ")[0]))).
       pipe(tap(jwt => this.saveIdPotager(Number(jwt.split(" ")[1]))));
  }

  saveData(data: any) {
    let rs = data.json();
    this.storage.set("user", rs.user);
    this.storage.set("id_token", rs.token);
  }

  logout() {
    this.storage.remove(this.jwtTokenName).then(() => this.authUser.next(null));
    this.storage.remove(this.idPotagerKey);
  }

  signup(values: any): Observable<any> {
    
    return this.httpClient.post(Conf.SERVER_URL+"signup", values ,{responseType: 'text'})
      .pipe(tap(res => 
        { 
          return res;
        }
    ));
    
  }

  private handleJwtResponse(jwt: string) {

    return this.storage.set(this.jwtTokenName, jwt)
      .then(() => this.authUser.next(jwt))
      .then(() => jwt)
      .then();

  }

  private saveIdPotager(idPotager : number){
    return this.storage.set(this.idPotagerKey, idPotager);
  }
}   