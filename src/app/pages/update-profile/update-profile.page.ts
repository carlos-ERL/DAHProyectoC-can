import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { User } from '../../models/user';
import { MenuController, NavController, ToastController } from '@ionic/angular';
import { Storage } from '@capacitor/storage';
import { AlertsServiceService } from 'src/app/services/alerts-service.service';
import { Router } from '@angular/router';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-update-profile',
  templateUrl: './update-profile.page.html',
  styleUrls: ['./update-profile.page.scss'],
})
export class UpdateProfilePage implements OnInit { 
  public myForm : FormGroup;
  public user:User;
  constructor(
    private userService:UserService, 
    private fb:FormBuilder,
    private navController: NavController,
    private alertas:AlertsServiceService,
    private router: Router,
  ) { 
    setTimeout(() => {
      this.getUserdata();
    }, 500);
  }

  ngOnInit() {
    this.myForm= this.fb.group({
      lastname:[""],
      name:[""],
      photo:[""],
      email:[""]      
    });
  }
  async getUserdata(){
    
    const userString = await Storage.get({key: 'user_data'});
    const parseUser = JSON.parse(userString.value)

    this.user={
      id:parseUser.id,
      lastname:parseUser.lastname,
      name:parseUser.name,
      email:parseUser.email,
      password:parseUser.password,
      photo:parseUser.photo,
      role: parseUser.role
    }
    this.myForm.setValue({
      name:parseUser.name,
      lastname : parseUser.lastname,      
      photo: parseUser.photo, 
      email: parseUser.email,
      });
  }
  async updateUser(){
    this.alertas.openLoading("Actualizando usuario....")
    
    this.user={
      id:this.user.id,
      lastname:this.myForm.controls.lastname.value,
      name:this.myForm.controls.name.value,
      email:this.myForm.controls.email.value,
      password:'',
      photo:this.myForm.controls.photo.value,
      role: this.user.role
    }
    console.log(this.user);
        await this.userService.updateUser(this.user).catch(error => {
          console.log(error);
          this.alertas.closeLoading();
        })
        let stringUser = JSON.stringify(this.user);
        await Storage.set({key: 'user_data',value:stringUser});
        this.alertas.presentToast("Usuario actualizado correctamente");
        this.alertas.closeLoading();
        this.navController.back();
   }


}
