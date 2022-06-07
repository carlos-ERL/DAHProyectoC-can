import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';
import { LoginService } from 'src/app/services/login.service';
import { Storage } from '@capacitor/storage';
import { INTRO_KEY } from 'src/app/guards/intro.guard';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.page.html',
  styleUrls: ['./user-profile.page.scss'],
})
export class UserProfilePage implements OnInit {
  public vacinationVisible: boolean;
  public user:User={
    id:'',
    lastname:'',
    name:'',
    email:'',
    password:'',
    photo:'',
    role:''
  };
  constructor(private userService:UserService,private router:Router, private loginService : LoginService) {
    setTimeout(() => {
      this.getUserdata();    
    }, 500);
   }

  ngOnInit() {
    setTimeout(() => {
      this.getUserdata();    
    }, 500);
  }

  async getUserdata(){
    
    const userString = await Storage.get({key: 'user_data'});
    const parseUser = JSON.parse(userString.value)
 
    this.userService.getUserById(parseUser.id).get().then((user) => {
      this.user = {
        id:user.id,
        lastname:user.get('lastname'),
        name:user.get('name'),
        email:user.get('email'),
        password:user.get('password'),
        photo:user.get('photo')
      } as User;

      if(parseUser.role == 'user'){
        this.vacinationVisible = true;
      }else { 
        this.vacinationVisible = false;
      }
    })
  }
  doRefresh(event) {
    this.getUserdata()

    setTimeout(() => {
      event.target.complete();
    }, 2000);
  }


  goToUpdate(){
    this.router.navigate(['/update-profile']);
  } 
  goToVaccination(){
    this.router.navigate(['/vaccination-list']);
  }

  toDateRegister(): void {
    const extras: NavigationExtras = {
      queryParams: {
        special: JSON.stringify(this.user),
      },
    };
    this.router.navigate(['/date-register'], extras);
  }
  toMyQuotes(): void {
    const extras: NavigationExtras = {
      queryParams: {
        special: JSON.stringify(this.user),
      },
    };
    this.router.navigate(['/my-user-quotes'], extras);
  }
  async logOut(){
  this.loginService.logout(this.user.email);
  await Storage.remove({key: 'user_data'});
  await Storage.remove({key: INTRO_KEY});
  await Storage.clear()
  this.router.navigate(['/']);
  }

}
