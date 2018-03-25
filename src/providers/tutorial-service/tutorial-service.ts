import { Injectable } from '@angular/core';
import { Http, Headers,RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import {Conf} from '../../conf/conf';
import { Tutorial } from '../../models/Tutorial';
import {AuthProvider} from '../auth/auth';
import {Storage} from '@ionic/storage';

@Injectable()
export class TutorialServiceProvider {

  jwtContent:String;
  idPotager:any;

  constructor(public http: Http,public authProvider:AuthProvider,private storage:Storage) {
   
  }

  getTutorials(idPotager,jwt)  : Observable<Tutorial[]>
  {
    let headers = new Headers({Authorization:jwt});
    let options = new RequestOptions({headers: headers});
    return this.http.get(Conf.SERVER_URL+"tutorials/"+idPotager,options).map(res => <Tutorial[]>res.json());
  }

}
