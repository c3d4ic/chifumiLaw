import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, ModalController, NavController } from '@ionic/angular';
import { Player } from '../commons/models/player';
import { Tournament } from '../commons/models/tournament';

import { SocketService } from '../commons/services/socket/socket.service';
import { GameDetailPage } from '../game-detail/game-detail.page';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  socketId: String = "";
  tournaments : any[] = [
    {
      id: 12,
      participants: [],
      game: [],
      admin: "toto",
      name: "Nom du tournois"
    },
    {
      id: 12,
      participants: [],
      game: [],
      admin: "toto",
      name: "Nom du tournois"
    },
    {
      id: 12,
      participants: [],
      game: [],
      admin: "toto",
      name: "Nom du tournois"
    }
  ]

  constructor(
    private modalCtrl: ModalController,
    private alertCtrl: AlertController,
    private socketService: SocketService,
    private router: Router,
  ) {}

  ionViewVillEnter() {
    this.tournaments = this.socketService.getTournaments();
    this.socketService.initSocket();
  }

  startNewGame() {

  }


  async showGameDetail() {
    const modal = await this.modalCtrl.create({
      component: GameDetailPage,
    });
    modal.present();
    const { data, role } = await modal.onWillDismiss()
    
    const tournamentName = data.title
    console.log("tournamentName : ", tournamentName);
    const participantName = await this.showNameAlert()
    console.log("participantName : ", participantName);

    this.socketService.createTournament(tournamentName, participantName)

    this.router.navigate(['/board'])

  }

  async showNameAlert() {
    const alert = await this.alertCtrl.create({
      header: 'Please enter your info',
      buttons: ['OK'],
      inputs: [
        {
          placeholder: 'Nickname (max 8 characters)',
          attributes: {
            maxlength: 8,
          },
        },
      ],
    })

    await alert.present()
    const { data } = await alert.onWillDismiss()
    
    return data.values[0]
  }

  joinTournament(tournamentId: Number) {
    const name = this.showNameAlert()
    // this.socketService.addPlayer(tournamentId, name)
  }

}
