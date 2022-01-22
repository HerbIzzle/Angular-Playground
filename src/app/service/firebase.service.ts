import { Injectable } from '@angular/core';
import {AngularFirestore} from "@angular/fire/compat/firestore";
import {User} from 'src/app/MaterialUI/User Table/User';


@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  constructor(private firestore : AngularFirestore) { }



  getUser(){
    return this.firestore.collection('user').snapshotChanges();
  };

  create(user: User){
    return this.firestore.collection('user').add(user);
  }

  delete(id : number) {
    this.firestore.doc('user/' + id).delete()
  }

  update(user: User){
    delete user.id;
    this.firestore.doc('students/' + user.id).update(user);
  }
}
