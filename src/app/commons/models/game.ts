import { Participant } from "./participant";
import { Round } from "./round";

export class Game {

  participant1: Participant
  participant2: Participant
  rounds: [Round]

  constructor(participant1: Participant, participant2: Participant, rounds: [Round]) {
    this.participant1 = participant1
    this.participant2 = participant2
    this.rounds = rounds
  }

}