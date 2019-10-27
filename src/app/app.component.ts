import { Component } from '@angular/core';
import { WebsocketService } from './websocket.service';
import { ChatService } from './chat.service';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [WebsocketService, ChatService]

})
export class AppComponent {
  title = 'ngWebsocketsSignaling';
  things: Observable<any[]>;

  tehShit;
  constructor(
    private chatService: ChatService,
    private db: AngularFirestore
  ) {
    this.chatService.getShit().subscribe(
      res => (this.tehShit = res)
    );
    // this.things = db.collection('things').valueChanges();

  }
  //   onSubmit() {
  //     this.ordersService.form.value.coffeeOrder = this.coffeeOrder;
  //     let data = this.ordersService.form.value;

  //   this.ordersService.createCoffeeOrder(data)
  //       .then(res => {
  //           /*do something here....
  //           maybe clear the form or give a success message*/
  //       });
  // }
}
