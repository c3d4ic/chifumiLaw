import { Participant } from "./participant";
import { gameAction } from "./enums";

export class Round {

  index: Number
  actionP1: gameAction
  actionP2: gameAction
  winner: Participant


  constructor(index: Number, actionP1: gameAction, actionP2: gameAction,  winner: Participant) {
    this.index = index
    this.actionP1 = actionP1
    this.actionP2 = actionP2
    this.winner =  winner
  }

}