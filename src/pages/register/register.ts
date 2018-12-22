import { Component,ViewChild } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';

import { HomePage } from '../home/home';
import { FormBuilder, FormGroup } from '@angular/forms';
import {Http, Headers, RequestOptions}  from "@angular/http";
import { LoadingController } from 'ionic-angular';
import 'rxjs/add/operator/map';


/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {
  @ViewChild("UserName") UserName;
  @ViewChild("Name") Name;
  @ViewChild("Position") Position;
  @ViewChild("District") District;
  @ViewChild("Division") Division;
  @ViewChild("Email") Email;
  @ViewChild("ContactNumber")ContactNumber;
  @ViewChild("password") Password;

  constructor(public navCtrl: NavController, public alertCtrl: AlertController,  private http: Http,  public loading: LoadingController) {

}
onGoToRegister(){
  this.navCtrl.push(HomePage);
}
Register(){

//// check to confirm the username, email, telephone and password fields are filled

if(this.username.value=="" ){
let alert = this.alertCtrl.create({
title:"ATTENTION",
subTitle:"Username field is empty",
buttons: ['OK']
});
alert.present();
} else

if(this.Name.value=="" ){
let alert = this.alertCtrl.create({
title:"ATTENTION",
subTitle:"Name field is empty",
buttons: ['OK']
});
alert.present();
} else

if(this.Position.value=="" ){
let alert = this.alertCtrl.create({
title:"ATTENTION",
subTitle:"Position field is empty",
buttons: ['OK']
});
alert.present();
} else

if(this.District.value=="" ){
let alert = this.alertCtrl.create({
title:"ATTENTION",
subTitle:"District field is empty",
buttons: ['OK']
});
alert.present();
} else

if(this.Division.value=="" ){
let alert = this.alertCtrl.create({
title:"ATTENTION",
subTitle:"Division field is empty",
buttons: ['OK']
});
alert.present();
} else

if(this.Email.value=="" ){
let alert = this.alertCtrl.create({
title:"ATTENTION",
subTitle:"Email field is empty",
buttons: ['OK']
});
alert.present();
} else

if(this.ContactNumber.value=="" ){
let alert = this.alertCtrl.create({
title:"ATTENTION",
subTitle:"ContactNumber field is empty",
buttons: ['OK']
});
alert.present();
} else

if(this.Password.value=="" ){
let alert = this.alertCtrl.create({
title:"ATTENTION",
subTitle:"Password field is empty",
buttons: ['OK']
});
alert.present();
} else

{

var headers = new Headers();
headers.append("Accept", 'application/json');
headers.append('Content-Type', 'application/json' );

let options = new RequestOptions({ headers: headers });

let data = {
UserName: this.UserName.value,
Name: this.Name.value,
Position: this.Position.value,
District: this.District.value,
Division: this.Division.value,
Email: this.Email.value,
ContactNumber: this.ContactNumber.value,
Password: this.Password.value

};

let loader = this.loading.create({
content: 'Processing please wait…',
});

loader.present().then(() => {
this.http.post('http://ionicdon.com/login.php',data, options)
.map(res => res.json())
.subscribe(res => {
loader.dismiss()
if(res=="Registration successfull"){
let alert = this.alertCtrl.create({
title:"CONGRATS",
subTitle:(res),
buttons: ['OK']
});

alert.present();
this.navCtrl.push(HomePage);
}else
{
let alert = this.alertCtrl.create({
title:"ERROR",
subTitle:(res),
buttons: ['OK']
});

alert.present();
}
});
});
}
}
}
