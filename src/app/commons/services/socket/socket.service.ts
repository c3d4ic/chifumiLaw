import { Injectable } from '@angular/core';
import { Tournament } from '../../models/tournament';
import { Player } from '../../models/player';
import { Socket } from 'ngx-socket-io';
import { gameAction } from '../../models/enums'

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

  createTournament(name: String, playerId: String) {
    this.socket.emit("createTournament", {
      "name" : name,
      "playerId" : playerId,
    });
  }

  onCreateTournament() {
    this.socket.on("onCreateTournament", (result: any) => {
      console.log("onCreateTournament : ", result);
    })
  }

  addPlayer(tournamentId: Number, player: Player) {
    this.socket.emit("addPlayer", {
      tournamentId: tournamentId,
      player: player
    });
  }

  onAddPlayer() {
    this.socket.on("onAddPlayer", (result: any) => {
      console.log("onAddPlayer : ", result);
    })
  }

  createPlayer(name: String, socketId: String) {
    this.socket.emit("createPlayer", {
      "name" : name,
      "socketId" : socketId,
    });
  }

  onCreatePlayer() {
    this.socket.on("onCreatePlayer", (result: any) => {
      console.log("onCreatePlayer : ", result);
    })
  }


  /* Selection d'une carte */
  gameAction(action: gameAction, playerId: String, roundId: String) {

  }

  getTournaments(): Tournament[] {
    let player = new Player("test", "234567", 0)
    let tournois = new Tournament(0, [], [], player)
    var tournaments: Tournament[] = []
    tournaments.push(tournois)

    return tournaments;
  }





}
