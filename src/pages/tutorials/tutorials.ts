import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { StreamingMedia, StreamingVideoOptions } from '@ionic-native/streaming-media';
import {LoadingController, ToastController} from 'ionic-angular';
import {TutorialServiceProvider} from '../../providers/tutorial-service/tutorial-service';
import {Tutorial} from '../../models/Tutorial';
import {AuthProvider} from "../../providers/auth/auth";
import {JwtHelperService} from '@auth0/angular-jwt';
import {Storage} from "@ionic/storage";

@IonicPage()
@Component({
  selector: 'page-tutorials',
  templateUrl: 'tutorials.html',
})
export class TutorialsPage {

  tutorials : Tutorial[];
  constructor(public navCtrl: NavController, public navParams: NavParams,private streamingMedia: StreamingMedia,private toascCtrl : ToastController, private tutorialService:TutorialServiceProvider,private authProvider:AuthProvider,jwtHelper: JwtHelperService, private storage : Storage) 
  {
    this.storage.get(this.authProvider.jwtTokenName).then(jwt => {
      this.storage.get(this.authProvider.idPotagerKey).then(idPotager => {
        this.tutorialService.getTutorials(idPotager,this.authProvider.jwtTokenName,jwt).subscribe(tutorials => this.tutorials = tutorials);
      });
    });
  }


  startVideo(t) {
    let options: StreamingVideoOptions = {
      successCallback: () => { console.log('Finished Video') },
      errorCallback: (e) => { const toast = this.toascCtrl.create({message : e.message, duration : 9000 ,position : 'bottom'});toast.present(); },
      orientation: 'portrait'
    };
    this.streamingMedia.playVideo(t.videoLink, options);
  }
}
