import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-game-detail',
  templateUrl: './game-detail.page.html',
  styleUrls: ['./game-detail.page.scss'],
})
export class GameDetailPage implements OnInit {

  protected gameTitle: String = "";

  constructor(
    private modalCtrl: ModalController
  ) { }

  ngOnInit() {
  }

  startGame() {
    this.modalCtrl.dismiss({ 'title': this.gameTitle })
  }
}
