import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { MonitoringPage } from '../pages/monitoring/monitoring';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import {LoginPage} from '../pages/login/login';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { PotagerIndicatorProvider } from '../providers/potager-indicator/potager-indicator';
import {HttpModule} from '@angular/http';
import {CustomFormsModule} from 'ng2-validation';
import { HttpClientModule } from '@angular/common/http';
import { AuthProvider } from '../providers/auth/auth';
import {Storage,IonicStorageModule} from "@ionic/storage";
import {JWT_OPTIONS, JwtModule} from '@auth0/angular-jwt';
import { SignupPage } from '../pages/signup/signup';
import {TutorialsPage} from '../pages/tutorials/tutorials';
import {ChangePasswordPage} from '../pages/change-password/change-password';
import {SettingsPage} from '../pages/settings/settings';
import { NgxGaugeModule } from 'ngx-gauge';
import { StreamingMedia } from '@ionic-native/streaming-media';
import { EventProvider } from '../providers/event/event';
import {BarcodeScanner} from '@ionic-native/barcode-scanner';
import { TutorialServiceProvider } from '../providers/tutorial-service/tutorial-service';

export function jwtOptionsFactory(storage: Storage) {
  return {
    tokenGetter: () => storage.get('Authorization'),
    whitelistedDomains: ['localhost:8080',"http://potajaime.herokuapp.com"]
  }
}

@NgModule({
  declarations: [
    MyApp,
    MonitoringPage,
    ContactPage,
    HomePage,
    TabsPage,
    LoginPage,
    SignupPage,
    SettingsPage,
    TutorialsPage,
    ChangePasswordPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule,
    HttpClientModule,
    NgxGaugeModule,
    JwtModule.forRoot({
      jwtOptionsProvider: {
        provide: JWT_OPTIONS,
        useFactory: jwtOptionsFactory,
        deps: [Storage]
      }
    }),
    IonicStorageModule.forRoot(),
    CustomFormsModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    MonitoringPage,
    ContactPage,
    HomePage,
    TabsPage,
    LoginPage,
    SignupPage,
    SettingsPage,
    TutorialsPage,
    ChangePasswordPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    BarcodeScanner,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    PotagerIndicatorProvider,
    AuthProvider,
    StreamingMedia,
    EventProvider,
    TutorialServiceProvider,
   ]
})
export class AppModule {}
