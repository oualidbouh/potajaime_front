import { Http, Headers,RequestOptions } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import {AuthProvider} from '../auth/auth';
import {Conf} from '../../conf/conf';
import {HomePageModel} from '../../models/HomePageModel';
import {Statistics} from '../../models/Statistics';
import {Storage} from '@ionic/storage';

/*
  Generated class for the PotagerIndicatorProvider provider.
*/
@Injectable()
export class PotagerIndicatorProvider {


  constructor(public http: Http,public authProvider:AuthProvider,private storage:Storage) {
    
  }

  getPotagerLastIndicator(idPotager,jwt) : Observable<HomePageModel>
  {
    let headers = new Headers({"Authorization" : jwt});
    let options  = new RequestOptions({headers: headers});
    return this.http.get(Conf.SERVER_URL+'ionic/potager/home/'+idPotager,options).map(res => <HomePageModel>res.json());
  }

  getPotagerIndicators(idPotager,jwt) : Observable<any>
  {
    let headers = new Headers({Authorization : jwt});
    let options  = new RequestOptions({headers: headers});
    return this.http.get(Conf.SERVER_URL+"statistics/"+idPotager, options).map(res => <Statistics>res.json());

  }
  
}
