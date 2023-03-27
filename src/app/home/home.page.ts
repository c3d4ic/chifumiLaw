import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, ModalController, NavController } from '@ionic/angular';
import { Participant } from '../commons/models/participant';
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
  tournamentName : String = ""

  tournaments : Tournament[] = []

  constructor(
    private modalCtrl: ModalController,
    private alertCtrl: AlertController,
    private socketService: SocketService,
    private router: Router,
  ) {}

  ionViewVillEnter() {
    this.tournaments = this.socketService.getTournaments();
  }

  startNewGame() {

  }


  async showGameDetail() {
    const modal = await this.modalCtrl.create({
      component: GameDetailPage,
    });
    modal.present();

    const { data, role } = await modal.onWillDismiss()

    // data.title

    this.showNameAlert()

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
    
    // const adminParticipant = new Participant(data.value, "", 0)
    // const tournament = new Tournament([], [], adminParticipant)

    this.socketService.initTournament(data.title)

    // Réccupérer l'ID du tournois afin de créer les objets participant + tournament


    this.router.navigate(['/board'])

  }

  joinTournament(tournamentId: Number) {
    const name = this.showNameAlert()
    this.socketService.addParticipant(tournamentId, name)
  }

}
