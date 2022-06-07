import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Storage } from '@capacitor/storage';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private firestore:AngularFirestore) { } 

  createUser(user:User){
    return this.firestore.collection('users').doc(user.id).set(user);
  }

  getUsers() {
    return this.firestore.collection('users').snapshotChanges(); 
  }

  getUserById(id: string) {
    return this.firestore.collection('users').doc(id).ref;
  }

  updateUser(user){
    return this.firestore.collection('users').doc(user.id).set(user);
  }
  getPersonalVacinationList(id){
    return this.firestore.collection('vaccination', ref => ref.where('userID', '==', id)).snapshotChanges();
  } 
}
