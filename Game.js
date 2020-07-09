class Game{
    constructor(money){
        this.stats = new Statistics();
        this.wallet = new Wallet(money);
        
        //ważny moment !!!! utrata wiązania, dlatego musimy zastosować .bind(this)
        document.getElementById("btn").addEventListener('click', this.startGame.bind(this,event));
        

        this.spanWallet = document.querySelector("span.wallet");
        this.boards = [...document.querySelectorAll("div.field")];
        this.inputBid =document.getElementById("bid");
        this.spanResult = document.querySelector("span.result");
        this.spanTotal = document.querySelector("span.total");
        this.spanWins = document.querySelector("span.win");
        this.spanLosses = document.querySelector("span.loss");
        

        this.render();
    }
    render(colors=["black","black","black"],money = this.wallet.getWalletValue(), result ="", stats = [0,0,0], bid=0, wonMoney=0){
        this.boards.forEach((board, index)=>{
            board.style.backgroundColor = colors[index];
        })
        this.spanWallet.textContent = money;
        if(result)
            result = `Wygrałeś ${wonMoney}$. `;
        else if (!result && result !== ""){
            result = `Przegrałeś ${bid}$. `;
        }
        this.spanResult.textContent=result;
        this.spanTotal.textContent = stats[0];
        this.spanWins.textContent = stats[1];
        this.spanLosses.textContent =stats[2];

        this.inputBid.value = "";
    }
    startGame(){
        event.preventDefault();
        if(this.inputBid.value<1) return alert("Kwota nieprawidłowa!");
        const bid = Math.floor(this.inputBid.value);

        if(!this.wallet.checkCanPlay(bid)){
            return alert("Masz za mało środków!");
        }

        this.wallet.changeWallet(bid, false);

        this.draw = new Draw();
        const colors = this.draw.getDrawResult();
        const win = Result.checkWinner(colors);
        const wonMoney = Result.moneyWinInGame(win,bid);
        this.wallet.changeWallet(wonMoney);
        this.stats.addGameToStatistics(win,bid);
        this.render(colors,this.wallet.getWalletValue(), win,this.stats.showGameStatistics(),  bid, wonMoney);

    }
}

