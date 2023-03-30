import { Game } from "./game";
import { Player } from "./player";

export class Tournament {
  id: Number
  participants: Player[]
  game: Game[]
  admin: Player

  constructor(id: Number, participants: Player[], game: Game[], admin: Player) {
    this.id = id
    this.participants = participants
    this.game = game
    this.admin = admin
  }
}