export class Participant {

  private name: String
  private socketId: String
  private score: Number

  constructor(name: String, socketId: String, score: Number) {
    this.name = name
    this.socketId = socketId
    this.score = score
  }
}