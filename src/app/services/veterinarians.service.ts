import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Veterinarian } from '../models/veterinarian';

@Injectable({
  providedIn: 'root'
})
export class VeterinariansService {

  constructor(private firestore:AngularFirestore) { }


  createVeterianrian(veterinarian:Veterinarian){
    return this.firestore.collection('veterinarians').add(veterinarian);
    
  }

  getVeterinarians() {
    return this.firestore.collection('veterinarians').snapshotChanges(); 
  }

  getVeterinarianById(id: string) {
    return this.firestore.collection('veterinarians').doc(id).ref;
  }
}
