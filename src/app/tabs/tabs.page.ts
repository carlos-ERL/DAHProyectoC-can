import { UserService } from 'src/app/services/user.service';
import { Component } from '@angular/core';
import { Storage } from '@capacitor/storage';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {
  public  show:boolean;
  constructor(private userService:UserService) {
    setTimeout(() => {
      this.getRole();    
    }, 500);
  }

  async getRole(){
    const userString = await Storage.get({key: 'user_data'});
    const user = JSON.parse(userString.value)
    if(user.role == "veterinarian"){
      this.show = false
    }else{
      this.show = true;
    }
  }
}
