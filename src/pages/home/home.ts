import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { RegisterPage } from '../register/register';
import {Http, Headers, RequestOptions}  from "@angular/http";
import { LoadingController } from 'ionic-angular';
import 'rxjs/add/operator/map';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {
  }
  onGoToLogin(){
   this.navCtrl.push(LoginPage);
  }
  onGoToRegister(){
    this.navCtrl.push(RegisterPage);
  }

  export class HomePage {
  @ViewChild(“UserName”) UserName;
  @ViewChild(“Password”) Password;
  data:string;

  constructor(public navCtrl: NavController, public alertCtrl: AlertController,
  private http: Http, public loading: LoadingController) {
  }


  signIn(){
  //// check to confirm the username and password fields are filled
  if(this.username.value=="" ){
  let alert = this.alertCtrl.create({
  title:"ATTENTION",
  subTitle:"Username field is empty",
  buttons: ['OK']
  });

  alert.present();
} elseif(this.password.value==""){
  let alert = this.alertCtrl.create({
  title:"ATTENTION",
  subTitle:"Password field is empty",
  buttons: ['OK']
  });

  alert.present();

  }else{

  var headers = new Headers();
  headers.append("Accept", 'application/json');
  headers.append('Content-Type', 'application/json' );
  let options = new RequestOptions({ headers: headers });
  let data = {

  UserName: this.UserName.value,
  Password: this.Password.value

  };

  let loader = this.loading.create({
  content: 'Processing please wait…',
  });

  loader.present().then(() => {
  this.http.post('http://ionicdon.com/mobile/login.php',data,options)
  .map(res => res.json())

  .subscribe(res => {

  console.log(res)

  loader.dismiss()

  if(res=="Your Login success"){

  let alert = this.alertCtrl.create({

  title:"CONGRATS",

  subTitle:(res),

  buttons: ['OK']

  });

  alert.present();

  }else

  {

  let alert = this.alertCtrl.create({

  title:"ERROR",

  subTitle:"Your Login Username or Password is invalid",

  buttons: ['OK']

  });

  alert.present();

  }

  });

  });

  }

  }

  }
}
