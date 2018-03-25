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

  private Authorization : String;
  private jwtContent :String;
  private idPotager : any;

  constructor(public http: Http,public authProvider:AuthProvider,private storage:Storage) {
    this.storage.get(this.authProvider.jwtTokenName).then(jwt => {
      this.jwtContent = jwt;
      this.storage.get(this.authProvider.idPotagerKey).then(idPotager => {
        console.log("idPotage ===========>"+this.idPotager);
        this.idPotager = idPotager;
      });
    });
  }
/*
  getPotagerIndicator () : Observable<PotagerIndicator[]>
  {
    let jwtToken : string;
    this.authProvider.storage.get(this.authProvider.jwtTokenName).then(jwt => {console.log(jwt);jwtToken = jwt});
    const headers = new Headers();
    headers.append('Authorization',jwtToken);
    const options = new RequestOptions({headers : headers});
    
    return this.http.get(Conf.SERVER_URL+'sigfox').map(res => <PotagerIndicator[]>res.json());
  }
*/

  getPotagerLastIndicator() : Observable<HomePageModel>
  {
    let headers = new Headers({Authorization : this.jwtContent});
    let options  = new RequestOptions({headers: headers});
    return this.http.get(Conf.SERVER_URL+'ionic/potager/home/'+this.idPotager,options).map(res => <HomePageModel>res.json());
  }

  getPotagerIndicators() : Observable<any>
  {
    let headers = new Headers({Authorization : this.jwtContent});
    let options  = new RequestOptions({headers: headers});
    return this.http.get(Conf.SERVER_URL+"statistics/"+this.idPotager, options).map(res => <Statistics>res.json());

  }
  
}
