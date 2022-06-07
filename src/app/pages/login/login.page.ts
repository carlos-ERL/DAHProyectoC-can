import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup,Validators } from '@angular/forms';
import { MenuController, NavController, ToastController } from '@ionic/angular';
import { Router, NavigationExtras } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';
import { AlertsServiceService } from 'src/app/services/alerts-service.service';
import { Storage } from '@capacitor/storage';
import { UserService } from '../../services/user.service';

 
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  Sesion: FormGroup;
  public validateMessages :object;
  public email:string
  public password:string

  constructor(
    private fb: FormBuilder,
    private navController: NavController,
    private router: Router,
    private auth: LoginService, 
    private alertas:AlertsServiceService,
    private userService:UserService ) { 
      this.validateUser()
      
    }

  ngOnInit() {
    this.Sesion = this.fb.group({
      email: ['',Validators.required],
      password: ['',Validators.required],
    });
    this.validateMessages = {
      'email':[
        {type : 'required', message:'Debe capturar el correo del usuario'}
      ],
      'password':[
        {type : 'required', message:'Debe capturar la contraseña del usuario'}
      ]

    }
  }
  async login (){
    //this.alertas.openLoading("Iniciando sesión....")
    let correo = this.Sesion.controls.email.value + '';
    let password= this.Sesion.controls.password.value + '';
    const res = await this.auth.login(correo,password).catch(error => {
      console.log(error);
      //this.alertas.closeLoading();
      this.alertas.presentToast("Usuario o contraseñas incorrectos")
      
    })
    if(res){
        //this.alertas.closeLoading();
        this.alertas.presentToast("Bienvenido")
        this.saveInLocal(res.user.uid);
        this.router.navigate(['/home/inicio']);
    }else{
    }
  }
  async validateUser(){
    const userString = await Storage.get({key: 'user_data'});
    console.log(userString);
    if(userString.value == null){}else{this.router.navigate(['/home/inicio']);}
  }
  async saveInLocal(id){
    this.userService.getUserById(id.toString()).get().then(async(snapShot)  => {
      const user = {
        id:snapShot.id,
        lastname:snapShot.get('lastname'),
        name:snapShot.get('name'),
        email:snapShot.get('email'),
        password:snapShot.get('password'),
        photo:snapShot.get('photo'),
        role: snapShot.get('role')
      }
      let stringUser = JSON.stringify(user);
      await Storage.set({key: 'user_data',value:stringUser});
    })
  }

  toRegister(){
    this.router.navigate(['/register']);
  }
  goToRestore(){
    this.router.navigate(['/restore-pasword']);
  }


}
