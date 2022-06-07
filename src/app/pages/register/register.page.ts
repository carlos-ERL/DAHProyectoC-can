import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from '../../models/user';
import { UserService } from '../../services/user.service';
import { MenuController, NavController, ToastController } from '@ionic/angular';
import { AlertsServiceService } from 'src/app/services/alerts-service.service';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html', 
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  public myForm:FormGroup;
  public validateMessages :object;
  public user:User;
  public show: boolean;
  constructor(
    private userService:UserService, 
    private fb:FormBuilder,
    private navController: NavController,
    private router: Router,
    private alertas:AlertsServiceService,
    private auth: LoginService,
  ) { }

  ngOnInit() {
    this.myForm= this.fb.group({
      name:["",Validators.required],
      lastname:["",Validators.required],
      email:["",Validators.required],
      password:["",Validators.required],
      photo:[""],
      role:[""]
    });
    this.validateMessages = {
      'name':[
        {type : 'required', message:'Debe ingresar su nombre'}
      ],
      'lastname':[
        {type : 'required', message:'Debe imgresar sus apellidos'}
      ],
      'email':[
        {type : 'required', message:'Debe ingresar un correo electronico'}
      ],
      'password':[
        {type : 'required', message:'Debe ingresar su contraseña'}
      ]

    }
  }

  async createUser(){
    this.alertas.openLoading("Creando usuario")
    this.user={
      lastname:this.myForm.controls.lastname.value,
      name:this.myForm.controls.name.value,
      email:this.myForm.controls.email.value,
      password:this.myForm.controls.password.value,
      photo:this.myForm.controls.photo.value,
      role: this.show == true ? 'veterinarian':'user'
    }

    const res = await this.auth.registerNewUser(this.user).catch(error => {
      console.log(error);
      this.alertas.closeLoading();
    })
    if(res){
        const userID = res.user.uid;
        this.user.id= userID;
        this.user.password = '';
        await this.userService.createUser(this.user).catch(error => {
          console.log(error);
          this.alertas.closeLoading();
        })
        this.alertas.presentToast("Usuario creado correctamente");
        this.alertas.closeLoading();
        this.router.navigate(['/login']);
        
    }
   }

}
