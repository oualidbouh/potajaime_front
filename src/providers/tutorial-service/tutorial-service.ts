import { Injectable } from '@angular/core';
import { Http, Headers,RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import {Conf} from '../../conf/conf';
import { Tutorial } from '../../models/Tutorial';
import {AuthProvider} from '../auth/auth';
/*
  Generated class for the TutorialServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class TutorialServiceProvider {

  constructor(public http: Http,public authProvider:AuthProvider) {
    console.log('Hello TutorialServiceProvider Provider');
  }

  getTutorials(idPotager:any,Authorization:any,jwtContent:any)  : Observable<Tutorial[]>
  {
    let headers = new Headers({Authorization:jwtContent});
    let options = new RequestOptions({headers: headers});
    return this.http.get(Conf.SERVER_URL+"tutorials/"+idPotager,options).map(res => <Tutorial[]>res.json());
  }

}
