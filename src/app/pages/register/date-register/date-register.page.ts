import { Component, OnInit } from '@angular/core';
import { DateService } from '../../../services/date.service'
import { FormBuilder, FormGroup } from '@angular/forms';
import { Quote } from '../../../models/quote';
import { MenuController, NavController, ToastController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/app/models/user';
import { Camera, CameraOptions } from '@awesome-cordova-plugins/camera/ngx';
import { Storage } from '@capacitor/storage';
import { AlertsServiceService } from 'src/app/services/alerts-service.service';



@Component({
  selector: 'app-date-register',
  templateUrl: './date-register.page.html',
  styleUrls: ['./date-register.page.scss'],
})
export class DateRegisterPage implements OnInit {
  public myForm:FormGroup;
  public quote:Quote;
  public currentDate=new Date(); 
  public user:User;
  URLimg:string = "";
  cameraOptions: CameraOptions = {
    quality:100,
    destinationType: this.camera.DestinationType.FILE_URI,
    encodingType: this.camera.EncodingType.JPEG,
    sourceType: this.camera.PictureSourceType.CAMERA,
    mediaType: this.camera.MediaType.PICTURE
  }
  galleryOptions: CameraOptions = {
    quality:50,
    allowEdit:true,
    correctOrientation:true,
    destinationType: this.camera.DestinationType.FILE_URI,
    encodingType: this.camera.EncodingType.JPEG,
    sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
    mediaType: this.camera.MediaType.PICTURE
  }
  photo:any = '';

  constructor(
    private dateService:DateService, 
    private fb:FormBuilder,
    private navController: NavController,
    private activatedRoute: ActivatedRoute ,
    private camera: Camera,
    private alertas:AlertsServiceService,
  ) { }

  ngOnInit() { 


    this.myForm= this.fb.group({
            description:[""],
            petName:[""],
            photo:[""],
            color:[""],
            weight:[0],
            race:[""],
            particularSign:[""],
            size:[""],
            creationDateQuote:[ this.currentDate.getDate()+'-'+(this.currentDate.getMonth()+1)+'-'+this.currentDate.getFullYear()],
            status:[""],
            
    });
  }
  openFromCamera(){
  this.camera.getPicture(this.cameraOptions).then((imageData) => {     
     this.myForm.setValue({
      photo:imageData,
      });
      this.URLimg = imageData; 
      this.alertas.presentToast(this.URLimg);
      this.photo= imageData;
      this.alertas.presentToast(this.photo);
    }, (err) => {
     // Handle error
    });
  }
  openFromGallery(){
  this.camera.getPicture(this.galleryOptions).then((imageData) => {
     let base64Image = 'data:image/jpeg;base64,' + imageData;
     this.myForm.setValue({
      photo:imageData,
      });
      this.URLimg = base64Image; 
      this.photo= imageData;

    }, (err) => {
     // Handle error
    });
  }
  async createDate(){
    this.currentDate=new Date();
    const userString = await Storage.get({key: 'user_data'});
    const parseUser = JSON.parse(userString.value)
    this.quote={
      description:this.myForm.controls.description.value,
      petName:this.myForm.controls.petName.value,
      photo:this.myForm.controls.photo.value,
      color:this.myForm.controls.color.value,
      weight:this.myForm.controls.weight.value,
      race:this.myForm.controls.race.value,
      particularSign:this.myForm.controls.particularSign.value,
      size:this.myForm.controls.size.value,
      creationDateQuote:this.currentDate.getDate()+'-'+(this.currentDate.getMonth()+1)+'-'+this.currentDate.getFullYear(),
      status:'En espera',
      userID: parseUser.id,
      responsable:''
    }
    console.log(this.quote);
    this.dateService.createQuote(this.quote).then(data =>{
      this.alertas.presentToast("Cita creada correctamente");
      this.navController.back();
    }).catch(error => console.log(error));
  }

}
