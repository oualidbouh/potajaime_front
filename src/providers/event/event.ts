import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import { Http, Headers,RequestOptions } from '@angular/http';
import {Conf} from '../../conf/conf';
import { URLSearchParams } from '@angular/http';
import {Storage} from '@ionic/storage';
import {AuthProvider} from '../auth/auth';
/*
  Generated class for the EventProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class EventProvider {

  jwtContent : String;
  idPotager : String;

  constructor(public http: Http,private storage : Storage,private authProvider : AuthProvider) {
    this.storage.get(this.authProvider.jwtTokenName).then(jwt => {
      this.jwtContent = jwt;
      this.storage.get(this.authProvider.idPotagerKey).then(idPotager => {
        this.idPotager = idPotager;
      });
    });
  }

  updateUndoneEvenet(idZone,done) : Observable<any>
  {
    let headers = new Headers({Authorization : this.jwtContent});
    let options  = new RequestOptions({headers: headers});
    const params = new URLSearchParams();
    params.set("done",done);
    return this.http.post(Conf.SERVER_URL+"ionic/potager/evenement/"+idZone,params,options);
  }

}
