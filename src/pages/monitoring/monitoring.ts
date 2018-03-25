import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {PotagerIndicatorProvider} from '../../providers/potager-indicator/potager-indicator';
import {AuthProvider} from '../../providers/auth/auth';
import { HomePageModel } from '../../models/HomePageModel';
import * as HighCharts from 'highcharts';
import {Statistics} from '../../models/Statistics';

@Component({
  selector: 'page-about',
  templateUrl: 'monitoring.html'
})


export class MonitoringPage {


   potagerIndicator:HomePageModel;

  //potagerIndicator : PotagerIndicator[]
  statistics : Statistics;
  constructor(public navCtrl: NavController, public potagerIndicatorProvider : PotagerIndicatorProvider, public authProvider:AuthProvider) {
    
  }

  ionViewDidLoad()
  {
    this.potagerIndicatorProvider.getPotagerIndicators().subscribe(data =>{
      this.statistics = data;
      var myChart = HighCharts.chart('container', {
        chart: {
        type: 'spline'
        },
        title: {
        text: 'Monitoring'
        },
        xAxis: {
        categories: []
        },
        yAxis: {
        title: {
        text: ''
        }
        },
        series: [{
        name: 'Température',
        data: this.statistics.temperatures
        }, {
        name: 'Humidité',
        data: this.statistics.humidities
        }]
        });
    });

  }
}
