import {Component} from '@angular/core';
import {JwtHelperService} from "@auth0/angular-jwt";
import {AuthProvider} from "../../providers/auth/auth";
import {HomePageModel} from '../../models/HomePageModel';
import {PotagerIndicatorProvider} from '../../providers/potager-indicator/potager-indicator';
import { Evenement } from '../../models/Event';
import {EventProvider} from '../../providers/event/event';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  user: string;
  message: string;

  potagerIndicator : HomePageModel;

  NULL_DATA_VALUES_FROM_BACKEND : any = "NaN";

  showHumidity : boolean = true;
  showTemperature : boolean = true;
  showWater : boolean = true;
  showLight : boolean = true;

  listOfDoneTasks : Evenement[];
  listOfUndoneTasks : Evenement[];

  constructor(private readonly authProvider: AuthProvider, jwtHelper: JwtHelperService, private readonly potagerProvider : PotagerIndicatorProvider, private readonly eventProvider : EventProvider) {

    this.listOfDoneTasks = new Array<Evenement>();
    this.listOfUndoneTasks = new Array<Evenement>();
    this.authProvider.authUser.subscribe(jwt => {
      if (jwt) {
        const decoded = jwtHelper.decodeToken(jwt);
        this.user = decoded.sub;
        this.authProvider.storage.get(this.authProvider.idPotagerKey).then(idPotager => {
          this.potagerProvider.getPotagerLastIndicator(idPotager).subscribe(data => {
            this.potagerIndicator = data;
            console.log(data);
            if(this.potagerIndicator.humidity == this.NULL_DATA_VALUES_FROM_BACKEND)
            {
              this.showHumidity = false;
            }
            if(this.potagerIndicator.temperature == this.NULL_DATA_VALUES_FROM_BACKEND)
            {
              this.showTemperature = false;
            }
            if(this.potagerIndicator.water == this.NULL_DATA_VALUES_FROM_BACKEND)
            {
              this.showWater = false;
            }
            if(this.potagerIndicator.light == this.NULL_DATA_VALUES_FROM_BACKEND)
            {
              this.showLight = false;
            }

            this.listOfDoneTasks = this.potagerIndicator.evenements.filter(e => e.done == true);
            this.listOfUndoneTasks = this.potagerIndicator.evenements.filter(e => e.done == false);
          });
        });
      }
      else {
        this.user = null;
      }
    });    
  }

  markEventAsDone(event,index)
  {
    console.log(event);
    this.eventProvider.updateUndoneEvenet(event.idZone,true)
    .subscribe(data => {
      if(data._body == "true"){
        this.listOfDoneTasks.push(event);
        this.listOfUndoneTasks.splice(index,1);
      }
      else if(data._body == "false")
      {
        console.log("not updated");
      }
    });
  }
  
}