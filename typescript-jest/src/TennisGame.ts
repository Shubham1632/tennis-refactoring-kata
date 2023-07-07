export interface TennisGame {
  wonPoint(playerName: string): void;
  getScore(): string;
  play(player1Score: number, player2Score: number): void;
}
