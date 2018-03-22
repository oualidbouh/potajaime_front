import { Http, Headers,RequestOptions } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import {AuthProvider} from '../auth/auth';
import {Conf} from '../../conf/conf';
import {HomePageModel} from '../../models/HomePageModel';
/*
  Generated class for the PotagerIndicatorProvider provider.
*/
@Injectable()
export class PotagerIndicatorProvider {

  constructor(public http: Http,public authProvider:AuthProvider) {
   
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

  getPotagerLastIndicator(idPotager:String) : Observable<HomePageModel>
  {
    return this.http.get(Conf.SERVER_URL+'ionic/potager/home/'+idPotager).map(res => <HomePageModel>res.json());
  }

  
}
