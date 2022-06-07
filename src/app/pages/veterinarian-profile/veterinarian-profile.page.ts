import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { Veterinarian } from 'src/app/models/veterinarian';
import { VeterinariansService } from 'src/app/services/veterinarians.service';

@Component({
  selector: 'app-veterinarian-profile',
  templateUrl: './veterinarian-profile.page.html',
  styleUrls: ['./veterinarian-profile.page.scss'],
})
export class VeterinarianProfilePage implements OnInit {
  veterinarian:Veterinarian={
    id:'',
    lastname:'',
    name:'',
    email:'',
    password:'',
    photo:'',
    speciality:''
  };

  constructor(private router:Router, private veterinaryService:VeterinariansService) { }

  ngOnInit() {
    this.veterinaryService.getVeterinarianById('rjyJK8DOqtMJQWmd9kFc').get().then((veterinarian) => {
      this.veterinarian = {
        id:veterinarian.id,
        lastname:veterinarian.get('lastname'),
        name:veterinarian.get('name'),
        email:veterinarian.get('email'),
        password:veterinarian.get('password'),
        photo:veterinarian.get('photo'),
        speciality:veterinarian.get('speciality')
      } as Veterinarian;
    })
  }


  toMyVeterinaryQuotes(): void {
    const extras: NavigationExtras = {
      queryParams: {
        special: JSON.stringify(this.veterinarian.id),
      },
    };
    this.router.navigate(['/my-veterinarian-quotes'], extras); //cambiar
  }

  toWaitListQuotes(): void {
    const extras: NavigationExtras = {
      queryParams: {
        special: JSON.stringify(this.veterinarian.id),
      },
    };
    this.router.navigate(['/waitlist'], extras);
  }
}
