import {Component, ViewChild} from '@angular/core';
import {LoadingController, ToastController} from 'ionic-angular';
import {NgModel} from "@angular/forms";
import {AuthProvider} from "../../providers/auth/auth";
import {finalize} from 'rxjs/operators/finalize';
import { NavController } from 'ionic-angular';
import {User} from '../../models/User'
import {LoginPage} from '../login/login';
import {BarcodeScanner} from '@ionic-native/barcode-scanner';

@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html'
})

export class SignupPage {

  @ViewChild('username')
  usernameModel: NgModel;

  public passwordNotMatching : Boolean = true;
  public notyetscanned : Boolean = true;
  scannedData:any = {};
  constructor(private readonly authProvider: AuthProvider,
              private readonly loadingCtrl: LoadingController,
              private readonly toastCtrl: ToastController,private navCtrl:NavController,private scanner:BarcodeScanner) {}

  //QR CODE scanner
  scan()
  {
    this.scanner.scan().then((data) => {
      //si tout est ok
      this.scannedData = data;
      this.notyetscanned = false;
    } 
    , (err) => {
        const toast = this.toastCtrl.create({
          message : "Erreur lors de l'ouverture de la caméra",
          duration: 5000,
          position: 'bottom'
        })
        toast.present()
    });
  }

  signup(value: any) 
  {
      let user = new User(value.nom , value.prenom , value.email , value.password , this.scannedData.text , null);
     
      let loading = this.loadingCtrl.create({
        spinner: 'bubbles',
        content: 'Création du compte en cours'
      });

      loading.present();

      this.authProvider
        .signup(user)
        .pipe(finalize(() => loading.dismiss()))
        .subscribe(
          (res) => this.showSuccesToast(res),
          err => this.handleError(err));
  }

  private showSuccesToast(response) 
  {
      if (response != null ) 
      {
        const toast = this.toastCtrl.create({
          message: 'Compte créé avec sucés',
          duration: 5000,
          position: 'bottom'
        });

        toast.present();
        this.navCtrl.push(LoginPage);
      }
      else 
      {
        const toast = this.toastCtrl.create({
          message: "L'email utilisateur existe déjà",
          duration: 5000,
          position: 'bottom'
        });

      toast.present();

      this.usernameModel.control.setErrors({'usernameTaken': true});
    }
    console.log(response);
  }

  handleError(error: any) {
    let message = "Une erreur innatendue s'est produite";

    const toast = this.toastCtrl.create({
      message,
      duration: 5000,
      position: 'bottom'
    });

    toast.present();
  }

  onConfirmPasswordChange(value,password)
  {
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
    if(value === confirmPassword.viewModel){
      this.passwordNotMatching = false;
    }
    else
    {
      this.passwordNotMatching = true;
    }
  }
  
}