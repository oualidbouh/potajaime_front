import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {AuthProvider} from '../../providers/auth/auth';
import { LoginPage } from '../login/login';
import { App } from 'ionic-angular/components/app/app';
import {ChangePasswordPage} from '../change-password/change-password';

@IonicPage()
@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html',
})

export class SettingsPage {

  auth : AuthProvider;
  constructor(public navCtrl: NavController, public navParams: NavParams,authProvider : AuthProvider, private app : App) {
    this.auth = authProvider;
  }

  goToChangePasswordPage()
  {
    
    this.navCtrl.push(ChangePasswordPage);
  }
  
  logout()
  {
    this.auth.logout();
    this.app.getRootNav().setRoot(LoginPage);
  }
}
