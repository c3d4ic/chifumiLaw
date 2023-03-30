import { Player } from "./player";
import { gameAction } from "./enums";

export class Round {

  index: Number
  actionP1: gameAction
  actionP2: gameAction
  winner: Player


  constructor(index: Number, actionP1: gameAction, actionP2: gameAction,  winner: Player) {
    this.index = index
    this.actionP1 = actionP1
    this.actionP2 = actionP2
    this.winner =  winner
  }

}