import { Participant } from "./participant";

export class Game {

  participant1: Participant
  participant2: Participant
  round: Number

  constructor(participant1: Participant, participant2: Participant, round: Number) {
    this.participant1 = participant1
    this.participant2 = participant2
    this.round = round
  }

}