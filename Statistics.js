class Statistics{
    constructor(){
        this.gameResults=[];
    }
    addGameToStatistics(win,bid){
        let gameResult={win:win, bid:bid}; //można napisać {win,bid}
        this.gameResults.push(gameResult);
    }
    showGameStatistics(){
        //[liczbGier,liczbaWygr,liczbaPor]
        let games=this.gameResults.length;
        let wins = this.gameResults.filter(result =>result.win).length;
    
        return [games,wins,games-wins];
    }

}