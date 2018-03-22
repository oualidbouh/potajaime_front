import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TutorielsPage } from './tutoriels';

@NgModule({
  declarations: [
    TutorielsPage,
  ],
  imports: [
    IonicPageModule.forChild(TutorielsPage),
  ],
})
export class TutorielsPageModule {}
