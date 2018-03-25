import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-change-password',
  templateUrl: 'change-password.html',
})
export class ChangePasswordPage {

  public passwordNotMatching : Boolean = true;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ChangePasswordPage');
  }

  onConfirmPasswordChange(value,password)
  {
    console.log(value);
    console.log(password.viewModel);
    if(value === password.viewModel){
      this.passwordNotMatching = false;
    }
    else
    {
      this.passwordNotMatching = true;
    }
  }

  onPasswordChange(value,confirmPassword)
  {
    console.log(value);
    console.log(confirmPassword.viewModel);
    if(value === confirmPassword.viewModel){
      this.passwordNotMatching = false;
    }
    else
    {
      this.passwordNotMatching = true;
    }
  }

  changePassword(value:any)
  {
    console.log(value);
  }

}
