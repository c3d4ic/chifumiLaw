import { Injectable } from '@angular/core';
import { Participant } from '../../models/participant';
import { Tournament } from '../../models/tournament';
import { Socket } from 'ngx-socket-io';

@Injectable({
  providedIn: 'root'
})
export class SocketService {

  constructor(
    private socket: Socket,
  ) { }

  initSocket() {
    this.socket.connect();
  }

  initTournament(tournamentTitle: String, participantName: String) {

    this.socket.emit("initTournament", {
      "tournamentTitle" : tournamentTitle,
      "participantName" : participantName,
    });

    // Créer le tournois avec le title et ajouter le socketID de l'admin
    // Retourn l'id du tournois
  }


  addParticipant(tournamentId: Number, name: String) {
    // Ajoute un participant 
  }

  /* Selection d'une carte */
  gameAction() {


  }

  getTournaments(): Tournament[] {
    let participant = new Participant("test", "234567", 0)
    let tournois = new Tournament(0, [], [], participant)
    var tournaments: Tournament[] = []
    tournaments.push(tournois)

    return tournaments;
  }





}
