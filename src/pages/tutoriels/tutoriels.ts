import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { StreamingMedia, StreamingVideoOptions } from '@ionic-native/streaming-media';

@IonicPage()
@Component({
  selector: 'page-tutoriels',
  templateUrl: 'tutoriels.html',
})
export class TutorielsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,private streamingMedia: StreamingMedia) {}

  ionViewDidLoad() {
  
  }

  startVideo() {
    let options: StreamingVideoOptions = {
      successCallback: () => { console.log('Finished Video') },
      errorCallback: (e) => { console.log('Error: ', e) },
      orientation: 'portrait'
    };
    this.streamingMedia.playVideo('http://www.sample-videos.com/video/mp4/720/big_buck_bunny_720p_30mb.mp4', options);
  }

}
