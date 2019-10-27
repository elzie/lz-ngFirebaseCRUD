import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})

export class ChatService {
  public messages: any[] = [];
  public things: any;
  public db: AngularFirestore;
  constructor(
    db: AngularFirestore,
  ) {
    this.things = db.collection('things').valueChanges();
  }

  getShit() {
    return this.things;
  }

  createEntry(data) {
    return new Promise<any>((resolve, reject) => {
      this.db.collection('things')
        .add(data)
        .then(res => { }, err => reject(err));
    });
  }

  getEntries() {
    return this.things;
  }


}
