class Game{
    constructor(money){
        this.stats = new Statistics();
        this.wallet = new Wallet(money);

        document.getElementById("btn").addEventListener('click', this.startGame);

        this.spanWallet = document.querySelector("span.wallet");
        this.boards = [...document.querySelectorAll("div.field")];
        this.inputBid =document.getElementById("bid");
        this.spanResult = document.querySelector("span.result");
        this.spanTotal = document.querySelector("span.total");
        this.spanWins = document.querySelector("span.win");
        this.spanLosses = document.querySelector("span.loss");

        this.render();
    }
    render(colors=["black","black","black"],money = this.wallet.getWalletValue(), stats = [0,0,0], result ="", bid=0, wonMoney=0){
        this.boards.forEach((board, index)=>{
            board.style.backgroundColor = colors[index];
        })
        this.spanWallet.textContent = money;
        if(result)
            result = `Wygrałeś ${wonMoney}`;
        else if (!result && result != ""){
            result = `Przegrałeś ${bid}`;
        }
        this.spanResult.textContent=result;
        this.spanTotal.textContent = stats[0];
        this.spanWins.textContent = stats[1];
        this.spanLosses.textContent =stats[2];
    }
    startGame(){

    }
}

