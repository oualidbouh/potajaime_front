import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { LoginPage } from '../pages/login/login';
import {AuthProvider} from '../providers/auth/auth';
import {TabsPage} from '../pages/tabs/tabs';

@Component({
  templateUrl: 'app.html'
})

export class MyApp {

  rootPage:any = null;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, authProvider: AuthProvider) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });

    //Page dispatcher
    authProvider.storage.get(authProvider.jwtTokenName).then(jwt => 
    {
      if (jwt && !authProvider.jwtHelper.isTokenExpired(jwt)) 
      {
        this.rootPage = TabsPage;
      }
      else 
      {
        //delete expired token
        authProvider.storage.remove(authProvider.jwtTokenName).then(() => authProvider.authUser.next(null));
        this.rootPage = LoginPage;
      }
  });
  }
}