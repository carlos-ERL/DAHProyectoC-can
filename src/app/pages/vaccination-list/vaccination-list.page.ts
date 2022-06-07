import { Component, OnInit } from '@angular/core';
import { Storage } from '@capacitor/storage';
import { AlertsServiceService } from 'src/app/services/alerts-service.service';
import { Router } from '@angular/router';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-vaccination-list',
  templateUrl: './vaccination-list.page.html',
  styleUrls: ['./vaccination-list.page.scss'],
})
export class VaccinationListPage implements OnInit {
  public myVaccinations=[];
  constructor(
    private userService:UserService, 
    private alertas:AlertsServiceService,
    private router: Router,
  ) {
    setTimeout(() => {
      this.getVaccinationList();
    }, 500); 
   }
  ngOnInit() { 
  }
  async getVaccinationList(){
    const userString = await Storage.get({key: 'user_data'});
    const parseUser = JSON.parse(userString.value)

    const res = this.userService.getPersonalVacinationList(parseUser.id).subscribe(async (data) => {
      data.map((quote) => {
        this.myVaccinations.push( {
          date:quote.payload.doc.get('date'),
          observations:quote.payload.doc.get('observations'),
          petname:quote.payload.doc.get('petname'),
        })
      })
    })

    if(res){
      
    }
  }


}
