import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {PotagerIndicatorProvider} from '../../providers/potager-indicator/potager-indicator';
import {AuthProvider} from '../../providers/auth/auth';
import { HomePageModel } from '../../models/HomePageModel';

@Component({
  selector: 'page-about',
  templateUrl: 'monitoring.html'
})


export class MonitoringPage {


  potagerIndicator:HomePageModel;

  gaugeType = "semi";

  gaugeValue = 25;
  gaugeLabel = "Température";
  gaugeAppendText = "°C";

  gaugeValue1 = 70;
  gaugeLabel1 = "Humidité";
  gaugeAppendText1 = "%";

  gaugeLabel2 = "Niveau d'eau";
  gaugeAppendText2 = "L";
  waterLevel = 3.5;

  thresholds = {"0": {color : "#00c1ff"},"10": {color: " 	#00c1ff"},"20": {color: "#00FF7F"},"30": {color: "red"}};
  thresholdsHumidity = {"0": {color : "#00c1ff"},"50": {color: " 	#f04444"}};

  //potagerIndicator : PotagerIndicator[]
  
  constructor(public navCtrl: NavController, public potagerIndicatorProvider : PotagerIndicatorProvider, public authProvider:AuthProvider) {
    //potagerIndicatorProvider.getPotagerIndicator().subscribe( data => {this.potagerIndicator = data;});
    //this.potagerIndicator = potagerIndicatorProvider.getPotagerLastIndicator();
    //console.log(this.potagerIndicator);
  }
}
