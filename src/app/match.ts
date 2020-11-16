export class Match {
    survivorOutcome: [MatchOutcome, MatchOutcome, MatchOutcome, MatchOutcome];
    gensDone: number;
    playedAsKiller: boolean;
    mori: boolean;
    noed: boolean;

    constructor() {
        this.survivorOutcome = [MatchOutcome.GATE, MatchOutcome.GATE, MatchOutcome.GATE, MatchOutcome.GATE];
        this.gensDone = -1;
        this.mori = this.noed = false;
    }
}

export enum MatchOutcome {
    GATE = 'GA',
    HATCH = 'H',
    GIFT = 'GI',
    SUICIDE = 'SU',
    SACRIFIED = 'SA',
    DEAD = 'D'
}
