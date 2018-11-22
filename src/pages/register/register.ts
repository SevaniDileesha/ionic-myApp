import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,AlertController } from 'ionic-angular';

import { HomePage } from '../home/home';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Camera , CameraOptions } from '@ionic-native/camera';



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

	myphoto:any;


  constructor(public navCtrl: NavController, public navParams: NavParams,private camera:Camera) {


}







  onGoToRegister(){
    this.navCtrl.push(HomePage);
  }

  takephoto(){
  	const options: CameraOptions = {
	  quality: 70,
	  destinationType: this.camera.DestinationType.FILE_URI,
	  encodingType: this.camera.EncodingType.JPEG,
	  mediaType: this.camera.MediaType.PICTURE
	}

	this.camera.getPicture(options).then((imageData) => {
	 // imageData is either a base64 encoded string or a file URI
	 // If it's base64 (DATA_URL):
	 this.myphoto = 'data:image/jpeg;base64,' + imageData;
	}, (err) => {
	 // Handle error
	});
  }




}
