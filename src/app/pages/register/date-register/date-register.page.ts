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
  public URLimg
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
    this.camera.getPicture({
      sourceType: this.camera.PictureSourceType.CAMERA,
      destinationType: this.camera.DestinationType.FILE_URI
  }).then((res) => {
      this.myForm.setValue({
        photo:res,
        });
        this.URLimg = res;
      console.log(res)
    }).catch(error =>{
      console.log(error)
    })
  }
  openFromGallery(){
    this.camera.getPicture({
      sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
      destinationType: this.camera.DestinationType.DATA_URL
    }).then((res) => {
      this.myForm.setValue({
        photo:res,
        });
        this.URLimg = 'data:image/jpeg;base64,'+res;
      console.log(res)
    }).catch(error =>{
      console.log(error)
    })
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
