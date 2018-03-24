import { Component } from '@angular/core';

import { MonitoringPage } from '../monitoring/monitoring';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';
import {SettingsPage} from '../settings/settings';
import {TutorialsPage} from '../tutorials/tutorials';
@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = MonitoringPage;
  tab3Root = ContactPage;
  tab4Root = SettingsPage;
  tab5Root = TutorialsPage;
  constructor() {

  }
}
