import { Player } from "./player";
import { Round } from "./round";

export class Game {

  participant1: Player
  participant2: Player
  rounds: [Round]

  constructor(participant1: Player, participant2: Player, rounds: [Round]) {
    this.participant1 = participant1
    this.participant2 = participant2
    this.rounds = rounds
  }

}