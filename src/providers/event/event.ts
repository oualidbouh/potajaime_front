import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import { Http, Headers,RequestOptions } from '@angular/http';
import {Conf} from '../../conf/conf';
import { URLSearchParams } from '@angular/http';
/*
  Generated class for the EventProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class EventProvider {

  constructor(public http: Http) {
    console.log('Hello EventProvider Provider');
  }

  updateUndoneEvenet(idZone,done) : Observable<any>
  {
    const params = new URLSearchParams();
    params.set("done",done);
    return this.http.post(Conf.SERVER_URL+"ionic/potager/evenement/"+idZone,params);
  }

}
