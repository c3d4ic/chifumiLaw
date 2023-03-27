import { Game } from "./game";
import { Participant } from "./participant";

export class Tournament {
  id: Number
  participants: Participant[]
  game: Game[]
  admin: Participant

  constructor(id: Number, participants: Participant[], game: Game[], admin: Participant) {
    this.id = id
    this.participants = participants
    this.game = game
    this.admin = admin
  }
}