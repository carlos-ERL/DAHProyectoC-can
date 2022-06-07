import { Component } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { Storage } from '@capacitor/storage';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  public isVeterinarian:boolean;
  constructor( private router:Router) {
    setTimeout(() => {
      this.getRole();    
    }, 500);
  } 
  
  toDateRegister(): void {
    this.router.navigate(['/date-register']);
  }

  toMyQuotes(): void {
    this.router.navigate(['/my-user-quotes']);
  }

  toWaitList(): void {
    this.router.navigate(['/waitlist']);
  }

  toAllQuotes() { 
    this.router.navigate(['/my-veterinarian-quotes']);
  }

  async getRole(){
    const userString = await Storage.get({key: 'user_data'});
    const user = JSON.parse(userString.value)
    if(user.role == "veterinarian"){
      this.isVeterinarian = true
    }else{
      this.isVeterinarian = false;
    }
  }

}
